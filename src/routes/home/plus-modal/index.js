import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useState} from 'react';
import {memories} from 'src/stores';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from 'baseui/modal';
import {Input} from 'baseui/input';
import {KIND as ButtonKind} from 'baseui/button';

import {styled} from 'baseui';

function PlusModal(props) {
  const [files, setFiles] = useState([]);
  const [text, setText] = useState('');
  const [datetime, setDatetime] = useState(0);
  return (
    <Modal onClose={props.onClose} isOpen={props.open}>
      <ModalHeader>Создание воспоминания</ModalHeader>
      <ModalBody>
        <div
          style={{
            marginTop: 10,
          }}
        >
          {/*<h3>Описание воспоминания</h3>*/}
          <Input
            overrides={{
              Root: {
                style: () => ({
                  marginTop: '10px',
                }),
              },
            }}
            placeholder={'Описание воспоминания'}
            size={SIZE.mini}
            type={'text'}
            border-color={'blue'}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          {/*<h3>Письмо в будущее</h3>*/}
          <Input
            overrides={{
              Root: {
                style: () => ({
                  marginTop: '10px',
                }),
              },
            }}
            placeholder={'Письмо в будущее'}
            type={'text'}
            // onChange={(e) => setLetter(e.target.value)}
          />
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <h3>Дата получения</h3>
          <Input
            overrides={{
              Root: {
                style: () => ({
                  marginTop: '10px',
                }),
              },
            }}
            type={'date'}
            onChange={(e) => setDatetime(+new Date(e.target.value))}
          />
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <h3>Заставка</h3>
          <Input
            overrides={{
              Root: {
                style: () => ({
                  marginTop: '10px',
                }),
              },
            }}
            type='file'
            multiple={false}
            onChange={(e) => setFiles(e.target.files)}
          />
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <h3>Файлы в будущее</h3>
          <Input
            overrides={{
              Root: {
                style: () => ({
                  marginTop: '10px',
                }),
              },
            }}
            type='file'
            multiple={true}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalButton
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
            props.onClose();
            const response = await fetch('/api/memory', {
              method: 'POST',
              body: formData,
            });
            const data = await response.json();
            console.log(data);

            await memories.loadMemories();
          }}
        >
          Отправить
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
}

export default PlusModal;
