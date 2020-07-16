import React from 'react';

import { Container } from 'components/Grid/styles';
import Navbar from 'components/Navbar';

import { HomeImage } from './styles';
import homeImg from 'assets/img/Home.png';

export default function Home() {

  return(
    <>
      <Navbar />
      <Container>
        <HomeImage src={homeImg} alt='home' />
      </Container>
    </>
  );
}