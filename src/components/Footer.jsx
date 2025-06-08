import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0d0d0d;
  color: #bfa14a;
  padding: 40px 16px 24px 16px;
  text-align: center;
`;
const SocialIcons = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
`;
const IconLink = styled.a`
  color: #bfa14a;
  font-size: 2rem;
  transition: color 0.2s;
  &:hover {
    color: #1a472a;
  }
`;
const NewsletterForm = styled.form`
  margin: 0 auto 1.2rem auto;
  max-width: 400px;
  display: flex;
  gap: 0.7rem;
  justify-content: center;
`;
const EmailInput = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  flex: 1;
`;
const SubscribeButton = styled.button`
  background: linear-gradient(90deg, #bfa14a 60%, #1a472a 100%);
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(90deg, #1a472a 40%, #bfa14a 100%);
  }
`;
const Copyright = styled.div`
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: #666;
`;

const Footer = () => (
  <FooterContainer>
    <SocialIcons>
      <IconLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></IconLink>
      <IconLink href="https://t.me/" target="_blank" rel="noopener noreferrer"><FaTelegram /></IconLink>
      <IconLink href="https://discord.com/" target="_blank" rel="noopener noreferrer"><FaDiscord /></IconLink>
    </SocialIcons>
    <NewsletterForm onSubmit={e => { e.preventDefault(); alert('ニュースレター購読ありがとうございます！'); }}>
      <EmailInput type="email" placeholder="メールアドレスを入力" required />
      <SubscribeButton type="submit">購読</SubscribeButton>
    </NewsletterForm>
    <Copyright>
      &copy; 2025 CryptoGolfClub. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer;
