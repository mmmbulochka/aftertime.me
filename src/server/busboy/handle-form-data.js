import Busboy from 'busboy'
import countStreamSize from '../count-stream-size'

async function handleFormData({
                                  createWriteStream,
                                  formData,
                                  headers,
                                  onField,
                                  onSuccess,
                                  onError,
                                  maxSingleSize,
                                  maxAllSize
                              }) {
    const fileUploadStatuses = []
    const fileUploads = []
    const files = []
    
    const preparedContStreamSize = countStreamSize({maxAllSize, maxSingleSize})
    
    const busboy = new Busboy({
        headers
    })
    
    function cancel(errorCode = 500) {
        fileUploads.forEach((fileUpload) => fileUpload.abort())
        files.forEach((file) => {
            file.unpipe()
            file.destroy()
        })
        onError(errorCode)
    }
    
    busboy.on('field', onField);
    
    busboy.on('file', function(fieldName, file, fileName, encoding, mimetype) {
        file.on('error', cancel)
        files.push(file)
        
        const fileUpload = createWriteStream(fieldName, {
            contentType: mimetype
        })
        fileUploads.push(fileUpload)
        
        const status = new Promise((resolve) => {
            file
                .pipe(preparedContStreamSize(() => {
                    cancel(413)
                }))
                .pipe(fileUpload)
            
            fileUpload.on('finish', () => {
                resolve(fileUpload.id)
            })
            fileUpload.on('error', () => {
                cancel()
            })
        })
        
        fileUploadStatuses.push(status)
    })
    
    busboy.on('finish', async () => {
        await Promise.all(fileUploadStatuses)
        
        onSuccess(fileUploads.map(fileUpload => fileUpload.id))
    });
    
    formData
        .pipe(busboy)
}

module.exports = handleFormData