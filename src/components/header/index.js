import style from './index.module.css';
import IconButton from '@mui/material/IconButton';

import InfoIcon from '@mui/icons-material/Info';
import Link from 'next/link';

function Header() {
  return (
    <div>
      <div className={style.upper} />
      <div className={style.header}>
        <IconButton color='inherit'>
          <Link href={'/information'}>
            <a className={style.icons}>
              <InfoIcon fontSize={'inherit'} />
            </a>
          </Link>
        </IconButton>
        <Link href={'/'}>
          <a className={style.page_name}>aftertime.me</a>
        </Link>
        <div></div>
        {/*<IconButton color='inherit'>*/}
        {/*  <Link href={'/'}>*/}
        {/*    <a>*/}
        {/*      <SimpleDialogDemo />*/}
        {/*    </a>*/}
        {/*  </Link>*/}
        {/*</IconButton>*/}
      </div>
    </div>
  );
}

export default Header;
