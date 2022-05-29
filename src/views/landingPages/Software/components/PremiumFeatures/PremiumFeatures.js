import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PremiumFeatures = () => {
  return (
    <Box>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        marginBottom={4}
      >
        Premium Features
      </Box>
      <Grid container justifyContent="center">
        <img
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src="./assets/coming-soon.png"
        />
      </Grid>
    </Box>
  );
};

export default PremiumFeatures;
