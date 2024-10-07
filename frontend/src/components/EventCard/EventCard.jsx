import { Card, CardActions, CardContent, CardMedia, Icon, Typography } from '@mui/material'
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
      <Card>
          <CardMedia
          sx={{height: 345,
                width: 345,
              }}
              image='https://cdn.pixabay.com/photo/2023/04/14/19/09/ai-generated-7925774_640.jpg'
              title='event image'
          />
          <CardContent>
              <Typography variant='h5' >
                  Burger King
              </Typography>
              <Typography variant='body2'>
                 50% off on your first order
              </Typography>
              <div className='py-2 space-y-2'>
                  <p>Philippines</p>
                  <p className='text-sm text-blue-500'>June 8, 2024 08:00 AM</p>
                  <p className='text-sm text-red-500'>June 10, 2024 08:00 AM</p>
              </div>
          </CardContent>
          {false && <CardActions>
              <Icon>
                  <DeleteIcon />
              </Icon>
          </CardActions>}
        </Card>
          
  )
}

export default EventCard