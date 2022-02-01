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
import {FormControl} from 'baseui/form-control';

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
          <FormControl label={() => 'Описание воспоминания'}>
            <Input
              type={'text'}
              border-color={'blue'}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <FormControl label={() => 'Письмо в будущее'}>
            <Input
              type={'text'}
              // onChange={(e) => setLetter(e.target.value)}
            />
          </FormControl>
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <FormControl label={() => 'Дата получения'}>
            <Input
              type={'date'}
              onChange={(e) => setDatetime(+new Date(e.target.value))}
            />
          </FormControl>
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <FormControl label={() => 'Заставка'}>
            <Input type='file' onChange={(e) => setFiles(e.target.files)} />
          </FormControl>
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <FormControl label={() => 'Файлы в будущее'}>
            <Input type='file' multiple={true} />
          </FormControl>
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
