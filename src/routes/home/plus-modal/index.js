import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useState} from 'react';

function PlusModal(props) {
  const [files, setFiles] = useState([]);
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>New message</DialogTitle>
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
