import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';
import {useState} from 'react';
import * as React from 'react';
import {memories} from "../../stores";
import Container from "../container";
import style from './index.module.css'
import Typography from "@mui/material/Typography";

function ContainerModal(props) {
  return (
    <Modal onClose={props.onClose} isOpen={props.open}>
      <ModalHeader>
          <Typography component='div' variant='h5'>
              {props.memory.title}
          </Typography>
      </ModalHeader>
      <ModalBody>
          <Typography component='div' variant='h6'>
              {props.memory.message}
          </Typography>
          <div className={style.img_box}>
              {props.memory.files.map((file) => {
              return <img  className={style.img} src={file}/>;
            })}
          </div>

      </ModalBody>
      <ModalFooter>
        <ModalButton onClick={props.onClose}>
          Закрыть
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
}

export default ContainerModal;
