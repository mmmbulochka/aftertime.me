import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';
import {useState} from 'react';

function ContainerModal(props) {
  return (
    <Modal onClose={props.onClose} isOpen={props.open}>
      Я окно
    </Modal>
  );
}

export default ContainerModal;
