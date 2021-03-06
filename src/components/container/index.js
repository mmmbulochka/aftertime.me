import * as React from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import Card from 'src/components/card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import ContainerModal from '../container-modal';
import style from './index.module.css';

export default function MediaControlCard(props) {
  const [open, setOpen] = React.useState(false);
  const isReady = Date.now() >= props.memory.date * 1000;
  const handleOpen = () => {
    if (isReady) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Card memory={props.memory} isReady={isReady} onClick={handleOpen} />
      {/*<Card*/}
      {/*  className={style.card}*/}
      {/*  /}
      {/*  sx={{*/}
      {/*    display: 'flex',*/}
      {/*    maxWidth: 370,*/}
      {/*    // height: 160,*/}
      {/*    boxShadow: '2px 5px 19px 2px rgba(219, 224, 229, 0.2)',*/}
      {/*    borderRadius: 0,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Box sx={{display: 'flex', flexDirection: 'column'}}>*/}
      {/*    <CardContent sx={{flex: '1 0 auto'}}>*/}
      {/*      <Typography component='div' variant='h5'>*/}
      {/*        {props.memory.title}*/}
      {/*      </Typography>*/}
      {/*      <Typography*/}
      {/*        variant='subtitle1'*/}
      {/*        color='text.secondary'*/}
      {/*        component='div'*/}
      {/*      >*/}
      {/*        {dayjs(props.memory.created * 1000).format('DD/MM/YYYY')} -{' '}*/}
      {/*        {dayjs(props.memory.date * 1000).format('DD/MM/YYYY')}*/}
      {/*      </Typography>*/}
      {/*    </CardContent>*/}
      {/*    <div*/}
      {/*      style={{*/}
      {/*        borderRadius: '100%',*/}
      {/*        backgroundColor: isReady ? '#DCEDC8' : '#FFCDD2',*/}
      {/*        height: 20,*/}
      {/*        width: 20,*/}
      {/*        marginLeft: 10,*/}
      {/*        marginBottom: 10,*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </Box>*/}

      {/*  <CardMedia*/}
      {/*    component='img'*/}
      {/*    sx={{width: 151, marginLeft: 'auto'}}*/}
      {/*    image={props.memory.icon}*/}
      {/*    alt='Live from space album cover'*/}
      {/*  />*/}
      {/*</Card>*/}
      <ContainerModal memory={props.memory} open={open} onClose={handleClose} />
    </div>
  );
}
