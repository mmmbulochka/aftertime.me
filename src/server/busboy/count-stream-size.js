import {Transform} from 'stream'

function countStreamSize({maxAllSize, maxSingleSize}) {
    let allSize = 0
    return (onLimit) => {
        return new class CountStreamSize extends Transform {
            _singleSize = 0
            _transform(chunk, encoding, callback) {
                if (!chunk) return
                
                allSize += chunk.length
                this._singleSize += chunk.length
                
                if (allSize > maxAllSize || this._singleSize > maxSingleSize) {
                    onLimit()
                }
                
                callback(null, chunk)
            }
        }
        
    }
}

export default countStreamSize