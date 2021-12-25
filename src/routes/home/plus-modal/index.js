import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import {Box, Button, Form, FormField, Grommet, Text, TextInput} from 'grommet';
import Dialog from '@mui/material/Dialog';

function PlusModal(props) {
  const {onClose, open} = props;
  const handleClose = () => {
    onClose();
  };

  const handleChange = (e) => {
    props.setMessage(e.target.value);
  };

  const check = (e) => {
    console.log('Отправленное имя: ' + props.message);
    e.preventDefault();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>New message</DialogTitle>
      <Grommet>
        <Box
          align='center'
          pad='large'
          sx={{
            '& > :not(style)': {m: 1, width: '25ch'},
          }}
        >
          <Form onSubmit={check}>
            <input
              type='text'
              name='name'
              onChange={handleChange}
              value={props.message}
              onSubmit={handleClose}
            />
            <input type='submit' value='Отправить' onClick={handleClose} />
          </Form>
        </Box>
      </Grommet>
    </Dialog>
  );
}

export default PlusModal;
