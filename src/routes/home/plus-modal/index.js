import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useState} from 'react';

function PlusModal(props) {
  const [files, setFiles] = useState([]);
  const [text, setText] = useState('');
  const [datetime, setDatetime] = useState(0);
  console.log(datetime);
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>New message</DialogTitle>
      <input type={'text'} onChange={(e) => setText(e.target.value)} />
      <input
        type={'datetime-local'}
        onChange={(e) => setDatetime(+new Date(e.target.value))}
      />
      <input
        type='file'
        multiple={true}
        onChange={(e) => setFiles(e.target.files)}
      />
      <button
        onClick={async () => {
          const formData = new FormData();
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            formData.append(file.name, file);
          }
          formData.append(
            'data',
            JSON.stringify({message: text, date: datetime / 1000})
          );

          // files.forEach((file) => formData.append(file.name, file));
          const response = await fetch('/api/memory', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          console.log(data);
        }}
      >
        Отправить
      </button>
    </Dialog>
  );
}

export default PlusModal;
