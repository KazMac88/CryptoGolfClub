import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #1a472a 60%, #bfa14a 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  font-weight: 700;
  background: linear-gradient(90deg, #bfa14a 20%, #fff 60%, #1a472a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 1s ease;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  color: #e0e0e0;
  animation: ${fadeIn} 1.5s ease;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  animation: ${fadeIn} 2s ease;
`;

const JoinButton = styled.a`
  background: linear-gradient(90deg, #bfa14a 60%, #1a472a 100%);
  color: #fff;
  padding: 0.9rem 2.2rem;
  border-radius: 40px;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  box-shadow: 0 4px 32px 0 rgba(191, 161, 74, 0.12);
  transition: background 0.3s, transform 0.2s;
  border: none;
  &:hover {
    background: linear-gradient(90deg, #1a472a 40%, #bfa14a 100%);
    color: #fff;
    transform: translateY(-3px) scale(1.04);
  }
`;

const HeroSection = () => (
  <Hero>
    <Title>CryptoGolfClub</Title>
    <Subtitle>仮想通貨とゴルフの情熱が出会う、唯一無二のコミュニティへようこそ。<br />未来のゴルフ体験を、あなたと。</Subtitle>
    <ButtonGroup>
      <JoinButton href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discordで参加</JoinButton>
      <JoinButton href="https://t.me/" target="_blank" rel="noopener noreferrer">Telegramで参加</JoinButton>
    </ButtonGroup>
  </Hero>
);

export default HeroSection;
