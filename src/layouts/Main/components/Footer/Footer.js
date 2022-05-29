import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import WebbeeLogo from 'svg/logos/Webbee';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          display={'flex'}
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={80}
          width={80}
        >
          <img
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            src="./assets/logo.png"
          />
        </Box>
        <Grid item xs={12}>
          <Typography
            align={'center'}
            variant={'subtitle2'}
            color="textSecondary"
            gutterBottom
          >
            &copy; PAAPI, 2021. All rights reserved
          </Typography>
          <Typography
            align={'center'}
            variant={'caption'}
            color="textSecondary"
            component={'p'}
            paddingLeft={10}
            paddingRight={10}
          >
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </Typography>
        </Grid>
      </Box>
    </Grid>
  </Grid>
);

export default Footer;
