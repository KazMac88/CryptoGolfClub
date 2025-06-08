import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import EventsSection from './components/EventsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', 'Roboto', sans-serif;
    background: linear-gradient(135deg, #0d0d0d 0%, #1a472a 100%);
    color: #fff;
    min-height: 100vh;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

const Main = styled.main`
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <EventsSection />
        <TestimonialsSection />
        <Footer />
      </Main>
    </>
  );
}

export default App;
