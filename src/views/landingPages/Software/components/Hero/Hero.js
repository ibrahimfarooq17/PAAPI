import React, { useState, useLayoutEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const Hero = () => {
  const size = useWindowSize()[0];
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: 'radial-gradient(#3394c1 20%, transparent 20%)',
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Box marginBottom={2} marginTop={0}>
          <Typography
            variant="h2"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            <Grid justifyContent="center">
              <img
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                src="./assets/logo.png"
              />
            </Grid>
            <span style={{ color: '#e1ab25' }}>PAAPI</span> is a Personal
            <br />
            Accounting API.
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h6" align={'center'} color={'textSecondary'}>
            A free <span style={{ color: '#e1ab25' }}>digital locker</span> for
            your accounting records.
          </Typography>
        </Box>
        <Box
          marginBottom={{ xs: 4, sm: 6, md: 8 }}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={'center'}
          alignItems={{ xs: 'stretched', sm: 'center' }}
        >
          <a
            href="https://github.com/personal-accounting-api"
            target="_blank"
            rel="noreferrer"
          >
            <Box
              className="btn-btn"
              component={Button}
              variant="contained"
              color="primary"
              bgcolor="#3394c1"
              size="large"
              fullWidth={!isMd}
              startIcon={<GitHubIcon />}
            >
              View on Github
            </Box>
          </a>
          <a
            href="https://developer.paapi.org/tag/Owner-Info"
            target="_blank"
            rel="noreferrer"
          >
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              fullWidth={!isMd}
              marginTop={{ xs: 1, sm: 0 }}
              marginLeft={{ sm: 2 }}
            >
              Documentation
            </Box>
          </a>
        </Box>
        <Grid container justifyContent="center">
          {size < 900 ? (
            <img
              className="my-img"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              src="./assets/code.png"
            />
          ) : (
            <img
              className="my-img"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              src="./assets/code-4.png"
            />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
