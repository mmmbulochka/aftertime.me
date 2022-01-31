import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

// return (
//   <Dialog onClose={props.onClose} open={props.open}>
//     <DialogTitle>
//       <h2>Создание воспоминания</h2>
//     </DialogTitle>
//     <div
//       style={{
//         width: 500,
//         height: 300,
//         padding: 40,
//       }}
//     >
//       <h3>Описание воспоминания</h3>
//       <input type={'text'} onChange={(e) => setText(e.target.value)} />
//       <h3>Письмо в будущее</h3>
//       <input
//         type={'text'}
//         // onChange={(e) => setLetter(e.target.value)}
//       />
//       <h3>Дата получения</h3>
//       <input
//         type={'date'}
//         onChange={(e) => setDatetime(+new Date(e.target.value))}
//       />
//       <h3>Заставка</h3>
//       <input
//         type='file'
//         multiple={false}
//         onChange={(e) => setFiles(e.target.files)}
//       />
//       <h3>Файлы в будущее</h3>
//       <input type='file' multiple={true} />
//       <button
//         onClick={async () => {
//           const formData = new FormData();
//           for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             formData.append(file.name, file);
//           }
//           formData.append(
//             'data',
//             JSON.stringify({message: text, date: datetime / 1000})
//           );
//           props.onClose();
//           const response = await fetch('/api/memory', {
//             method: 'POST',
//             body: formData,
//           });
//           const data = await response.json();
//           console.log(data);
//
//           await memories.loadMemories();
//         }}
//       >
//         Отправить
//       </button>
//     </div>
//   </Dialog>
// );
