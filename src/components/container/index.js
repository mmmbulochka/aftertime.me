import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: 'flex',
        width: 400,
        boxShadow: '2px 5px 19px 2px rgba(219, 224, 229, 0.2)',
        borderRadius: 0,
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{flex: '1 0 auto'}}>
          <Typography component='div' variant='h5'>
            {props.memory.message}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component='img'
        sx={{width: 151, marginLeft: 'auto'}}
        image='https://cs10.pikabu.ru/post_img/big/2020/12/03/10/160701789716438111.png'
        alt='Live from space album cover'
      />
    </Card>
  );
}
