import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import s from './index.module.css';

function Card(props) {
  return (
    <div onClick={props.onClick} className={s.card}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 200,
          height: 200,
        }}
      >
        <CardContent sx={{flex: '1 0 auto'}}>
          <Typography component='div' variant='h5'>
            {props.memory.title}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {dayjs(props.memory.created * 1000).format('DD/MM/YYYY')} -{' '}
            {dayjs(props.memory.date * 1000).format('DD/MM/YYYY')}
          </Typography>
        </CardContent>
        <div
          style={{
            borderRadius: '100%',
            backgroundColor: props.isReady ? '#DCEDC8' : '#FFCDD2',
            height: 20,
            width: 20,
            marginLeft: 10,
            marginBottom: 10,
          }}
        />
      </div>
      <CardMedia
        component='img'
        sx={{width: 200, height: 200, marginLeft: 'auto'}}
        image={props.memory.icon}
        alt='Live from space album cover'
      />
    </div>
  );
}

export default Card;
