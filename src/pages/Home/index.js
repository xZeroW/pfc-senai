import React from 'react';
import { motion } from 'framer-motion';

import { Container } from 'components/Grid/styles';

export default function Home() {

  const pageTransitions = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '-100%'
    }
  };

  return(
    <motion.div
      initial='out'
      exit='out'
      animate='in'
      variants={pageTransitions}
    >
      <Container>
        <h1>Home</h1>
      </Container>
    </motion.div>
  );
}