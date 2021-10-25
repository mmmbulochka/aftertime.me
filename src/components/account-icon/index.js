import * as React from 'react';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from './/index.module.css';
import AccountModal from '../account-modal';

AccountModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

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
