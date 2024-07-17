import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <div className='form-div'>
    <Box 
      component="form" 
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: '0 auto' }} 
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
    </div>
  );
}

export default ContactForm;
