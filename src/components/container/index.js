import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import ContainerModal from '../container-modal';
import {useState} from 'react';

export default function MediaControlCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (dayjs() <= dayjs(props.memory.created)) {
      setOpen(true);
    }
  };
  console.log(dayjs().format('x'));
  console.log(dayjs(props.memory.date * 1000));
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Card
        onClick={handleOpen}
        sx={{
          display: 'flex',
          width: 400,
          height: 160,
          boxShadow: '2px 5px 19px 2px rgba(219, 224, 229, 0.2)',
          borderRadius: 0,
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
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
        </Box>
        <CardMedia
          component='img'
          sx={{width: 151, marginLeft: 'auto'}}
          image={props.memory.icon}
          alt='Live from space album cover'
        />
      </Card>
      <ContainerModal open={open} onClose={handleClose} />
    </div>
  );
}
