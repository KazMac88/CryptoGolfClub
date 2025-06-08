import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, Divider, Fade, Stack, Avatar } from '@mui/material';
import Footer from '../components/Footer';
import { Telegram, GolfCourse, EmojiEvents, Star, Verified } from '@mui/icons-material';

const heroBg = 'linear-gradient(120deg, #1a1a1a 60%, #014421 100%)';
const gold = '#FFD700';
const green = '#228B22';
const discordUrl = 'https://discord.gg/cryptogolfclub';
const telegramUrl = 'https://t.me/cryptogolfclub';

const Home = () => {
  return (
    <Box sx={{ bgcolor: '#0a0a0a', color: 'white' }}>
      {/* Hero Section */}
      <Box sx={{
        minHeight: '90vh',
        background: heroBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        pb: { xs: 6, md: 12 }
      }}>
        {/* Blockchain SVG background */}
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.08 }}>
          <defs>
            <linearGradient id="blockchainGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={gold} />
              <stop offset="100%" stopColor={green} />
            </linearGradient>
          </defs>
          <g>
            {[...Array(10)].map((_, i) => (
              <rect key={i} x={i*120} y={i*20} width="100" height="30" rx="10" fill="url(#blockchainGold)" />
            ))}
          </g>
        </svg>
        <Fade in timeout={1200}>
          <Box sx={{ position: 'relative', zIndex: 1, mt: { xs: 8, md: 16 } }}>
            <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: 2, color: gold, fontFamily: 'Montserrat, sans-serif', mb: 2 }}>
              CryptoGolfClub（クリプトゴルフクラブ）
            </Typography>
            <Typography variant="h5" sx={{ color: '#fafafa', mb: 3, fontFamily: 'Montserrat, sans-serif' }}>
              ブロックチェーンとゴルフが出会う場所
            </Typography>
            <Typography variant="body1" sx={{ color: '#bdbdbd', mb: 4, maxWidth: 500, mx: 'auto' }}>
              仮想通貨好きとゴルフ愛好家のための、プレミアムなコミュニティ。ネットワークを広げ、最新のクリプト情報とゴルフ体験を楽しみませんか？
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" mb={2}>
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: gold, color: 'black', fontWeight: 'bold', boxShadow: 4, '&:hover': { bgcolor: '#ffe066' } }}
                href={discordUrl}
                target="_blank"
                startIcon={<Telegram />}
              >
                コミュニティに参加（Discord）
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ borderColor: gold, color: gold, fontWeight: 'bold', '&:hover': { bgcolor: '#111', borderColor: gold } }}
                href={telegramUrl}
                target="_blank"
                startIcon={<Telegram />}
              >
                Telegramで参加
              </Button>
            </Stack>
          </Box>
        </Fade>
        {/* Golf ball SVG animation */}
        <svg width="60" height="60" style={{ position: 'absolute', bottom: 30, right: 40, zIndex: 1 }}>
          <circle cx="30" cy="30" r="28" fill={gold} stroke={green} strokeWidth="4" />
          <circle cx="30" cy="30" r="18" fill="#fff" opacity="0.8" />
        </svg>
      </Box>

      {/* What is CryptoGolfClub? */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Fade in timeout={1600}>
          <Box textAlign="center">
            <Typography variant="h4" sx={{ color: gold, fontWeight: 'bold', mb: 2 }}>
              CryptoGolfClubとは？
            </Typography>
            <Typography variant="body1" sx={{ color: '#e0e0e0', mb: 4 }}>
              CryptoGolfClub（クリプトゴルフクラブ）は、ゴルフ好きと仮想通貨・ブロックチェーン愛好家が集う新しい形のコミュニティです。限定ゴルフイベントや交流会、NFTやトークンを活用した特典もご用意しています。
            </Typography>
            <GolfCourse sx={{ fontSize: 48, color: green, mb: 2 }} />
          </Box>
        </Fade>
      </Container>

      {/* Member Benefits */}
      <Box sx={{ bgcolor: '#111', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Fade in timeout={1800}>
            <Box>
              <Typography variant="h4" sx={{ color: gold, fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                メンバー特典
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={4}>
                  <Card sx={{ bgcolor: '#181818', boxShadow: 3, border: `1.5px solid ${gold}` }}>
                    <CardContent>
                      <Star sx={{ color: gold, fontSize: 36, mb: 1 }} />
                      <Typography variant="h6" sx={{ color: gold, mb: 1 }}>限定ゴルフ大会</Typography>
                      <Typography variant="body2" color="#ccc">メンバー限定のゴルフコンペやクリプト賞品付きイベントに参加できます。</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ bgcolor: '#181818', boxShadow: 3, border: `1.5px solid ${green}` }}>
                    <CardContent>
                      <EmojiEvents sx={{ color: green, fontSize: 36, mb: 1 }} />
                      <Typography variant="h6" sx={{ color: green, mb: 1 }}>交流・ネットワーキング</Typography>
                      <Typography variant="body2" color="#ccc">仮想通貨投資家・開発者・ゴルフ好きとつながるチャンス。</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ bgcolor: '#181818', boxShadow: 3, border: `1.5px solid ${gold}` }}>
                    <CardContent>
                      <Verified sx={{ color: gold, fontSize: 36, mb: 1 }} />
                      <Typography variant="h6" sx={{ color: gold, mb: 1 }}>ブロックチェーン特典</Typography>
                      <Typography variant="body2" color="#ccc">イベント参加でCGCトークンやNFTなどデジタル特典を獲得。</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Upcoming Events */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Fade in timeout={2000}>
          <Box>
            <Typography variant="h4" sx={{ color: gold, fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
              今後のイベント・大会
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: '#202020', color: gold, boxShadow: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1 }}>CGCスプリング・インビテーショナル</Typography>
                    <Typography variant="body2" color="#eee">日程：2025年7月14日<br/>場所：東京ゴルフ倶楽部<br/>参加資格：CGCトークン保有者</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: '#202020', color: green, boxShadow: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1 }}>クリプト＆ゴルフ・ミキサー</Typography>
                    <Typography variant="body2" color="#eee">日程：2025年8月3日<br/>場所：オンライン（Discord）<br/>参加資格：メンバー全員無料</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>

      {/* Testimonials */}
      <Box sx={{ bgcolor: '#161616', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Fade in timeout={2200}>
            <Box>
              <Typography variant="h4" sx={{ color: gold, fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                参加者の声
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ bgcolor: '#232323', color: gold, boxShadow: 2 }}>
                    <CardContent>
                      <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                        <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>サトシ・G</Typography>
                      </Stack>
                      <Typography variant="body2" color="#eee">
                        「CGCで最高のゴルフ仲間と出会い、NFTにも詳しくなれました。プレミアムな雰囲気と温かいコミュニティが魅力です！」
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ bgcolor: '#232323', color: green, boxShadow: 2 }}>
                    <CardContent>
                      <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                        <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>ミナ・T</Typography>
                      </Stack>
                      <Typography variant="body2" color="#eee">
                        「CryptoGolfClubのイベントは、楽しさ・学び・交流が全部詰まっています。クリプトやゴルフ好きなら絶対おすすめ！」
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    コンペ参加や賭けに使用できる独自の仮想通貨。
                    コミュニティ内で活用できます。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
