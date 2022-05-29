import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

const Features = () => {
  const theme = useTheme();

  const renderTitles = (title) => {
    if (title === 'A') return 'ersonal';
    else if (title === 'B') return 'rofessional';
    else if (title === 'C') return 'rivate';
    else if (title === 'D') return 'rotected';
    else if (title === 'E') return 'ortable';
    else if (title === 'F') return 'ragmatic';
  };

  return (
    <Grid container justifyContent="center" spacing={5}>
      {[
        {
          title: 'A',
          subtitle:
            'Ideal for storing your personal accounting and financial data. Income tax filing becomes much easier with your data properly stored and categorized for your accountant or tax filing software.',
          icon: <PersonalVideoOutlinedIcon />,
        },
        {
          title: 'B',
          subtitle:
            'We’ve added features specifically built for small business and accounting professionals. Easily access financial data from another “paapi” by simply requesting access.',
          icon: <WorkspacePremiumOutlinedIcon />,
        },
        {
          title: 'C',
          subtitle:
            'Your data is only accessible to those who you provide security credentials and API keys to.',
          icon: <LockOutlinedIcon />,
        },
        {
          title: 'D',
          subtitle:
            'Your data is securely stored and backed up with the same security standards used by the banking industry.',
          icon: <SecurityOutlinedIcon />,
        },
        {
          title: 'E',
          subtitle:
            'Your data is 100% portable. Import and export your data to and from various data sources at your leisure.',
          icon: <WorkOutlineOutlinedIcon />,
        },
        {
          title: 'F',
          subtitle:
            'Ideal for students interested in learning more about Accounting and Financial Technology (FinTech).',
          icon: <PsychologyOutlinedIcon fontSize="medium" />,
        },
      ].map((item, i) => (
        <Grid key={i} item xs={12} md={6}>
          <ListItem
            component="div"
            disableGutters
            data-aos={'fade-up'}
            sx={{
              alignItems: 'flex-start',
              padding: 0,
            }}
          >
            <Box component={ListItemAvatar} marginRight={2}>
              <Box
                component={Avatar}
                bgcolor={alpha(theme.palette.primary.main, 0.1)}
                width={60}
                height={60}
              >
                <Box color={theme.palette.primary.main}>{item.icon}</Box>
              </Box>
            </Box>
            <ListItemText
              secondary={item.subtitle}
              primaryTypographyProps={{ variant: 'h6', gutterBottom: true }}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 700,
                  fontSize: '27px',
                },
                margin: 0,
                '& .MuiListItemText-primary &::firstletter': {
                  color: '#e1ab25',
                },
              }}
            >
              <span
                style={{
                  fontSize: '36px',
                  color: '#e1ab25',
                }}
              >
                P
              </span>
              {renderTitles(item.title)}
            </ListItemText>
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
