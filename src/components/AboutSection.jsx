import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 64px 16px 32px 16px;
  background: #141e13;
  color: #fff;
  text-align: center;
`;
const Heading = styled.h2`
  font-size: 2.2rem;
  font-family: 'Montserrat', sans-serif;
  color: #bfa14a;
  margin-bottom: 1rem;
`;
const Text = styled.p`
  font-size: 1.15rem;
  max-width: 700px;
  margin: 0 auto;
  color: #e0e0e0;
`;

const AboutSection = () => (
  <Section>
    <Heading>CryptoGolfClubとは？</Heading>
    <Text>
      CryptoGolfClubは、仮想通貨とゴルフを愛する人々のための新しいコミュニティです。<br />
      ブロックチェーン技術とゴルフのラグジュアリーな世界を融合し、メンバー同士が情報交換やイベント参加を通じて、<br />
      新しい価値や体験を創造します。
    </Text>
  </Section>
);

export default AboutSection;
