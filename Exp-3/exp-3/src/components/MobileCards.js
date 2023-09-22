import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MobileCards({mobile}) {
  return (
    <Card sx={{ maxWidth: 355 ,maxHeight: 450,margin: 5,alignItems:'center'}}>
      <CardActionArea>
        <CardMedia
          style={{
            display:'flex',
            width:'75%',
            padding:'20px'
          }}
          component="img"
          image={mobile.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mobile.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Model : {mobile.model}
             Price : {mobile.price}
             Available : {mobile.available?"Yes":"No"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}