import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Partners = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: '700',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Compatible with companies like
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <img
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src="./assets/companies-2.png"
        />
      </Grid>
    </Box>
  );
};

export default Partners;
