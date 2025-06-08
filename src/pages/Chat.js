import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Paper, Grid, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [message, setMessage] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabs = [
    { label: '0-70', value: 0 },
    { label: '71-80', value: 1 },
    { label: '81-90', value: 2 },
    { label: '91-100', value: 3 },
    { label: '101+', value: 4 },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            チャットルーム
          </Typography>
          
          <Paper sx={{ mt: 2 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} />
              ))}
            </Tabs>

            <Box sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
                    {/* チャットメッセージエリア */}
                    <Box sx={{ height: '400px', overflow: 'auto' }}>
                      {/* メッセージがここに表示されます */}
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="メッセージを入力..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        // メッセージ送信処理
                        setMessage('');
                      }}
                    >
                      送信
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Chat;
