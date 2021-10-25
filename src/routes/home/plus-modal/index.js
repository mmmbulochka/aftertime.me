import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import {Box, Button, Form, FormField, Grommet, Text, TextInput} from 'grommet';
import Dialog from '@mui/material/Dialog';
import {grommet} from 'grommet/themes';
import {deepMerge} from 'grommet/utils';
import {TextField} from '@mui/material';
import {useState} from 'react';
import {render} from 'react-dom';

const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      requiredIndicator: true,
    },
  },
});

function PlusModal(props) {
  // const [message, setMessage] = useState('DefaultMessage');
  const {onClose, open} = props;
  const handleClose = () => {
    onClose();
  };

  // const handleChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const ShowMessage = message;
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>New message</DialogTitle>
      <Grommet theme={customTheme}>
        <Box
          align='center'
          pad='large'
          sx={{
            '& > :not(style)': {m: 1, width: '25ch'},
          }}
        >
          <Form>
            <div>{/*<ShowMessage />*/}</div>
            <TextField
              fullWidth
              label='fullWidth'
              id='fullWidth'
              // onChange={handleChange}
              // value={message}
            />
          </Form>
        </Box>
      </Grommet>
    </Dialog>
  );
}

export default PlusModal;
