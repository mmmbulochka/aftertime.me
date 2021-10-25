import style from './index.module.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import Link from 'next/link';
import SimpleDialogDemo from '../account-icon';

function Header() {
  return (
    <div className={style.header}>
      <IconButton className={style.icons} color='inherit'>
        <Link href={'/information'}>
          <a>
            <InfoIcon fontSize={'inherit'} />
          </a>
        </Link>
      </IconButton>
      <Link href={'/'}>
        <a className={style.page_name}>aftertime.me</a>
      </Link>
      <IconButton color='inherit'>
        <Link href={''}>
          <a>
            <SimpleDialogDemo />
          </a>
        </Link>
      </IconButton>
    </div>
  );
}

export default Header;
