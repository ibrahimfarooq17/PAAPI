import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Reviews = () => {
  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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
          Reviews
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Accountants love <span style={{ color: '#e1ab25' }}>PAAPI</span>
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Loved by accountants and small businesses across the globe
        </Typography>
      </Box>
      <Box maxWidth={600} margin={'0 auto'}>
        <Slider {...sliderOpts}>
          {[
            {
              feedback:
                'Working with PAAPI is fantastic. Super simple financial tool.',
              image: 'https://assets.maccarianagency.com/avatars/img1.jpg',
              name: 'Clara Bertoletti',
              title: 'Accountant',
            },
            {
              feedback:
                'Providing personal financial information to those who need it has never been easier.',
              image: 'https://assets.maccarianagency.com/avatars/img2.jpg',
              name: 'Jhon Anderson',
              title: 'Web Developer',
            },
            {
              feedback:
                'Integrating with 3rd party applications that provide additional functionality is really the icing on the cake.',
              image: 'https://assets.maccarianagency.com/avatars/img3.jpg',
              name: 'Chary Smith',
              title: 'Accounting Manager',
            },
          ].map((item, i) => (
            <Box key={i}>
              <Box
                component={Typography}
                variant={'h6'}
                fontWeight={400}
                align={'center'}
                gutterBottom
              >
                {item.feedback}
              </Box>
              <Box
                component={'ul'}
                display={'flex'}
                justifyContent={'center'}
                width={'100%'}
              >
                <Box component={ListItem} disableGutters width={'auto'}>
                  <ListItemAvatar>
                    <Avatar src={item.image} />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.title} />
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Reviews;
