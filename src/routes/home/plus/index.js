// import AddCircleIcon from '@mui/icons-material/AddCircle';
import style from '../plus/index.module.css';
import PlusModal from '../plus-modal';
import * as React from 'react';
import PlusIcon from 'baseui/icon/plus';
import {Button} from 'baseui/button';

function Plus(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style.footer}>
      <Button onClick={handleOpen}>
        <PlusIcon className={style.icon} size={30} />
      </Button>
      <PlusModal
        message={props.message}
        setMessage={props.setMessage}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default Plus;
