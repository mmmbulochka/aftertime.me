import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';
import {useState} from 'react';
import * as React from 'react';

function ContainerModal(props) {
  return (
    <Modal onClose={props.onClose} isOpen={props.open}>
      <ModalHeader>Теперь на меня можно посмотреть</ModalHeader>
      <ModalBody></ModalBody>
      <ModalFooter>
        <ModalButton overrides={{}} onClick={props.onClose}>
          Закрыть
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
}

export default ContainerModal;
