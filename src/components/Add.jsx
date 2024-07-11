import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

function Add() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    sem: ''
  });
  const [count, setCount] = useState(0);

  const valueAdd = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: '16px'
      }}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Grid container spacing={2} sx={{ width: '300px' }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="filled"
              value={formData.name}
              onChange={handleChange}
              InputProps={{ sx: { backgroundColor: 'white' } }}
              InputLabelProps={{ sx: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="department"
              name="department"
              label="Department"
              variant="filled"
              value={formData.department}
              onChange={handleChange}
              InputProps={{ sx: { backgroundColor: 'white' } }}
              InputLabelProps={{ sx: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="sem"
              name="sem"
              label="Semester"
              variant="filled"
              value={formData.sem}
              onChange={handleChange}
              InputProps={{ sx: { backgroundColor: 'white' } }}
              InputLabelProps={{ sx: { color: 'black' } }}
            />
          </Grid>
        </Grid>
      </Box>
      <Button type="submit" variant="contained" color="success" onClick={valueAdd}>
        Submit
      </Button>
      <small>Count is {count}</small>
    </Box>
  );
}

export default Add;
