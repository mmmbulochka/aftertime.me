import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from './/index.module.css';
import AccountModal from '../account-modal';

function AccountIcon() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <div className={style.icons}>
        <AccountCircleIcon fontSize={'inherit'} onClick={handleClickOpen} />
      </div>
      <AccountModal open={open} onClose={handleClose} />
    </div>
  );
}

export default AccountIcon;
