import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Button, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Competition = () => {
  const [formData, setFormData] = useState({
    name: '',
    handicap: '',
    cgcAmount: '',
    availableDates: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // アンケート送信処理
    console.log('送信データ:', formData);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            次回コンペ参加アンケート
          </Typography>

          <Paper sx={{ p: 4, bgcolor: 'background.paper' }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="名前"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>ハンデ</InputLabel>
                    <Select
                      name="handicap"
                      value={formData.handicap}
                      onChange={handleInputChange}
                      label="ハンデ"
                    >
                      <MenuItem value="0-10">0-10</MenuItem>
                      <MenuItem value="11-20">11-20</MenuItem>
                      <MenuItem value="21-30">21-30</MenuItem>
                      <MenuItem value="31+">31+</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="参加費（CGC）"
                    name="cgcAmount"
                    type="number"
                    value={formData.cgcAmount}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    参加可能な日程
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        variant={formData.availableDates.includes('2025-06-15') ? 'contained' : 'outlined'}
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            availableDates: prev.availableDates.includes('2025-06-15') 
                              ? prev.availableDates.filter(date => date !== '2025-06-15')
                              : [...prev.availableDates, '2025-06-15']
                          }));
                        }}
                      >
                        2025/06/15 (日)
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant={formData.availableDates.includes('2025-06-22') ? 'contained' : 'outlined'}
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            availableDates: prev.availableDates.includes('2025-06-22') 
                              ? prev.availableDates.filter(date => date !== '2025-06-22')
                              : [...prev.availableDates, '2025-06-22']
                          }));
                        }}
                      >
                        2025/06/22 (日)
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    アンケートを送信
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Competition;
