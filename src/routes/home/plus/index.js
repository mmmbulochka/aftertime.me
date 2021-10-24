import AddCircleIcon from '@mui/icons-material/AddCircle';
import style from '../plus/index.module.css';

import * as React from 'react';
import {Button} from 'grommet';
import {Box, Modal, Typography} from '@mui/material';

function Plus() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style.footer}>
      <Button>
        <AddCircleIcon className={style.addIcon} onClick={handleOpen} />
      </Button>
    </div>
  );
}

export default Plus;
