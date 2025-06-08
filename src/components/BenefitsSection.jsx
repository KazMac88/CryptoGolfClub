import React from 'react';
import styled from 'styled-components';
import { FaCrown, FaGift, FaUserFriends } from 'react-icons/fa';

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
const BenefitsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;
const Benefit = styled.div`
  background: #1a472a;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  min-width: 220px;
  max-width: 320px;
  box-shadow: 0 4px 24px 0 rgba(191, 161, 74, 0.08);
  color: #fff;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px 0 rgba(191, 161, 74, 0.18);
  }
`;
const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #bfa14a;
  margin-bottom: 1rem;
`;
const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
`;
const BenefitDesc = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
`;

const BenefitsSection = () => (
  <Section>
    <Heading>メンバー特典</Heading>
    <BenefitsGrid>
      <Benefit>
        <IconWrapper><FaCrown /></IconWrapper>
        <BenefitTitle>限定NFTバッジ</BenefitTitle>
        <BenefitDesc>メンバー限定のNFTバッジやデジタルグッズを配布。</BenefitDesc>
      </Benefit>
      <Benefit>
        <IconWrapper><FaGift /></IconWrapper>
        <BenefitTitle>特別イベント招待</BenefitTitle>
        <BenefitDesc>リアル・オンラインでのゴルフイベントや交流会に優先招待。</BenefitDesc>
      </Benefit>
      <Benefit>
        <IconWrapper><FaUserFriends /></IconWrapper>
        <BenefitTitle>グローバルな仲間</BenefitTitle>
        <BenefitDesc>世界中の仮想通貨＆ゴルフファンとつながるネットワーク。</BenefitDesc>
      </Benefit>
    </BenefitsGrid>
  </Section>
);

export default BenefitsSection;
