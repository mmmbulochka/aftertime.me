import * as React from 'react';
import {useState} from 'react';
import {memories} from 'src/stores';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';
import {Input} from 'baseui/input';

import {FormControl} from 'baseui/form-control';

function PlusModal(props) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [datetime, setDatetime] = useState(0);
  const [icon, setIcon] = useState(null);
  const [files, setFiles] = useState([]);

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
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <FormControl label={() => 'Письмо в будущее'}>
            <Input type={'text'} onChange={(e) => setMessage(e.target.value)} />
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
            <Input type='file' onChange={(e) => setIcon(e.target.files[0])} />
          </FormControl>
        </div>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <FormControl label={() => 'Файлы в будущее'}>
            <Input
              inputRef={(ref) => {
                if (ref) {
                  ref.multiple = true;
                }
              }}
              type={'file'}
              onChange={(event) => setFiles(event.target.files)}
            />
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
            formData.append('icon', icon);
            formData.append(
              'data',
              JSON.stringify({message, title, date: datetime / 1000})
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
