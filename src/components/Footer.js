import React from 'react';
import { Box, Typography, IconButton, TextField, Button, Stack } from '@mui/material';
import { Twitter, Telegram, Instagram, Email } from '@mui/icons-material';

const socialLinks = [
  { icon: <Twitter />, url: 'https://twitter.com/' },
  { icon: <Telegram />, url: 'https://t.me/' },
  { icon: <Instagram />, url: 'https://instagram.com/' },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'black', color: 'gold', py: 6, px: 2, mt: 8 }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h6">ニュースレター登録</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} component="form" onSubmit={e => e.preventDefault()}>
          <TextField
            variant="filled"
            placeholder="メールアドレスを入力"
            InputProps={{ disableUnderline: true, style: { background: '#222', color: 'gold' } }}
            sx={{ input: { color: 'gold' } }}
            size="small"
          />
          <Button type="submit" variant="contained" sx={{ bgcolor: 'gold', color: 'black', fontWeight: 'bold' }}>
            登録
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          {socialLinks.map((s, i) => (
            <IconButton key={i} component="a" href={s.url} target="_blank" rel="noopener" sx={{ color: 'gold' }}>
              {s.icon}
            </IconButton>
          ))}
          <IconButton component="a" href="mailto:contact@cryptogolfclub.com" sx={{ color: 'gold' }}>
            <Email />
          </IconButton>
        </Stack>
        <Typography variant="caption" color="#888">
          お問い合わせ: contact@cryptogolfclub.com
        </Typography>
        <Typography variant="caption" color="#888">
          © {new Date().getFullYear()} CryptoGolfClub. All Rights Reserved.
        </Typography>
      </Stack>
    </Box>
  );
}
