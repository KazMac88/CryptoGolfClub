import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: 64px 16px 32px 16px;
  background: #101010;
  color: #fff;
  text-align: center;
`;
const Heading = styled.h2`
  font-size: 2rem;
  color: #bfa14a;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 1.5rem;
`;
const TestimonialsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;
const Testimonial = styled.div`
  background: #1a472a;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  min-width: 220px;
  max-width: 350px;
  box-shadow: 0 4px 24px 0 rgba(191, 161, 74, 0.08);
  color: #fff;
  font-size: 1rem;
  position: relative;
  animation: ${fadeIn} 1s ease;
`;
const QuoteIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #bfa14a;
  font-size: 1.5rem;
`;
const User = styled.div`
  margin-top: 1.2rem;
  font-size: 0.98rem;
  color: #bfa14a;
  font-family: 'Montserrat', sans-serif;
`;

const TestimonialsSection = () => (
  <Section>
    <Heading>ユーザーの声</Heading>
    <TestimonialsGrid>
      <Testimonial>
        <QuoteIcon><FaQuoteLeft /></QuoteIcon>
        仮想通貨の最新情報もゴルフ仲間も同時に手に入る、最高の場所です！
        <User>@golfcrypto</User>
      </Testimonial>
      <Testimonial>
        <QuoteIcon><FaQuoteLeft /></QuoteIcon>
        NFTバッジが本当にカッコいい！イベントも毎回楽しみにしています。
        <User>@web3golfer</User>
      </Testimonial>
      <Testimonial>
        <QuoteIcon><FaQuoteLeft /></QuoteIcon>
        世界中のゴルフ好きと繋がれて、人生が広がりました。
        <User>@blockchainbirdie</User>
      </Testimonial>
    </TestimonialsGrid>
  </Section>
);

export default TestimonialsSection;
