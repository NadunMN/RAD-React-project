import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const CardComponent = () => {
  return (
    <Card style={{ maxWidth: 345, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is an example of a simple card using Material-UI. You can add more content and customize it as needed.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
