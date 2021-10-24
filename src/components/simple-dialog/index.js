import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';

import {Box, Button, Form, FormField, Grommet, Text, TextInput} from 'grommet';
import {grommet} from 'grommet/themes';
import {deepMerge} from 'grommet/utils';

const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      requiredIndicator: true,
    },
  },
});

function SimpleDialog(props) {
  const {onClose, selectedValue, open} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>JOPA</DialogTitle>
      <Grommet theme={customTheme}>
        <Box align='center' pad='large'>
          <Form>
            <FormField
              name='firstName'
              htmlFor='firstName'
              label='First Name'
              required
            >
              <TextInput id='firstName' name='firstName' />
            </FormField>
            <FormField
              name='lastName'
              htmlFor='lastName'
              label='Last Name'
              required
            >
              <TextInput id='lastName' name='lastName' />
            </FormField>
            <FormField name='email' htmlFor='email' label='Email' required>
              <TextInput id='email' name='email' type='email' />
            </FormField>
            <Button type='submit' label='Submit' primary />
            <Text margin={{left: 'small'}} size='small' color='status-critical'>
              * Required Field
            </Text>
          </Form>
        </Box>
      </Grommet>
    </Dialog>
  );
}

export default SimpleDialog;
