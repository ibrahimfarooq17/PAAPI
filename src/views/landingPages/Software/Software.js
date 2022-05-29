import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from 'common/Container';
import {
  Hero,
  Features,
  PremiumFeatures,
  Reviews,
  Partners,
} from './components';

const Software = () => {
  const theme = useTheme();

  return (
    <Box>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <PremiumFeatures />
      </Container>
      <Divider />
      <Container>
        <Reviews />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Partners />
        </Container>
      </Box>
    </Box>
  );
};

export default Software;
