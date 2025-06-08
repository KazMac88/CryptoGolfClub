import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const Section = styled.section`
  padding: 64px 16px 32px 16px;
  background: #141e13;
  color: #fff;
  text-align: center;
`;
const Heading = styled.h2`
  font-size: 2rem;
  color: #bfa14a;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 1.5rem;
`;
const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 650px;
`;
const EventItem = styled.li`
  background: #1a472a;
  margin-bottom: 1.2rem;
  border-radius: 16px;
  padding: 1.3rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: #fff;
  box-shadow: 0 2px 16px 0 rgba(191, 161, 74, 0.06);
  font-size: 1.1rem;
`;
const Icon = styled.span`
  color: #bfa14a;
  font-size: 2rem;
`;
const EventInfo = styled.div`
  text-align: left;
`;
const EventTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
`;
const EventDate = styled.div`
  color: #bfa14a;
  font-size: 0.98rem;
  margin-top: 0.2rem;
`;

const EventsSection = () => (
  <Section>
    <Heading>イベント情報</Heading>
    <EventList>
      <EventItem>
        <Icon><FaCalendarAlt /></Icon>
        <EventInfo>
          <EventTitle>Web3ゴルフ体験会</EventTitle>
          <EventDate>2025年7月20日（東京・リアル開催）</EventDate>
        </EventInfo>
      </EventItem>
      <EventItem>
        <Icon><FaCalendarAlt /></Icon>
        <EventInfo>
          <EventTitle>CryptoGolfClubオンライン交流会</EventTitle>
          <EventDate>2025年8月10日（Discord）</EventDate>
        </EventInfo>
      </EventItem>
      <EventItem>
        <Icon><FaCalendarAlt /></Icon>
        <EventInfo>
          <EventTitle>スペシャルAMA：プロゴルファー×Web3</EventTitle>
          <EventDate>2025年9月5日（Telegramライブ）</EventDate>
        </EventInfo>
      </EventItem>
    </EventList>
  </Section>
);

export default EventsSection;
