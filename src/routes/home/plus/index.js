import AddCircleIcon from '@mui/icons-material/AddCircle';
import style from '../plus/index.module.css';
import PlusModal from '../plus-modal';
import * as React from 'react';
import {Button} from 'grommet';

function Plus(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style.footer}>
      <div className={style.plus_container}>
        <AddCircleIcon className={style.addIcon} onClick={handleOpen} />
      </div>
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
