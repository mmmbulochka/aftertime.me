import * as React from 'react';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from '../header-modal/index.module.css';
import SimpleDialog from '../simple-dialog';

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
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
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
