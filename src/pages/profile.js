import Profile from '../routes/profile';

export default Profile;

import AddCircleIcon from '@mui/icons-material/AddCircle';
import style from '../add-container/index.module.css';

import * as React from 'react';
import {Button} from 'grommet';
import {Box, Modal, Typography} from '@mui/material';

function AddContainer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className={style.footer}>
      <Button onClick={handleOpen}>
        <AddCircleIcon className={style.addIcon} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={styles}>Privet</Box>
      </Modal>
    </div>
  );
}

export default AddContainer;

