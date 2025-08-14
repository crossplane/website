import React from 'react';
import { Box, Typography, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';
import Link from 'src/elements/Link';
import Image from 'next/image';
import iceCreamIcon from 'public/icecream-icon.svg';

const root: SxProps = {
  width: '100%',
  py: 3,
  px: 4,
  bgcolor: COLORS.nileBlue,
  color: COLORS.white,
  border: '4px solid #FFCD3C',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  mt: 6,
  mb: 4,
  position: 'relative',
  textAlign: 'center',
};

const titleContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: { _: 2, md: 3 },
  mb: 2,
};

const linkStyle: SxProps = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: COLORS.white,
  fontWeight: 500,
  fontSize: { _: 20, md: 24 },
  py: 0.75,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const linksContainer: SxProps = {
  display: 'flex',
  flexDirection: { _: 'column', md: 'row' },
  alignItems: 'center',
  gap: { _: 2, md: 4 },
};

const iconsContainerStyle: SxProps = {
  position: 'relative',
  width: { _: 45, md: 60 },
  height: { _: 32, md: 40 },
  display: 'flex',
  alignItems: 'center',
};

const V2Banner = () => {
  return (
    <Box sx={root}>
      <Box sx={titleContainer}>
        <Box sx={iconsContainerStyle}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              '& img': {
                width: { _: 24, md: 32 },
                height: 'auto',
              },
            }}
          >
            <Image src={iceCreamIcon} alt="Ice cream icon" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: { _: 15, md: 20 },
              transform: 'translateY(-50%)',
              '& img': {
                width: { _: 24, md: 32 },
                height: 'auto',
              },
            }}
          >
            <Image src={iceCreamIcon} alt="Ice cream icon" />
          </Box>
        </Box>
        <Typography variant="h2" sx={{ lineHeight: 1.2, color: '#FFFFFF' }}>
          Crossplane v2.0
        </Typography>
        <Box sx={iconsContainerStyle}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              '& img': {
                width: { _: 24, md: 32 },
                height: 'auto',
              },
            }}
          >
            <Image src={iceCreamIcon} alt="Ice cream icon" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: { _: 15, md: 20 },
              transform: 'translateY(-50%)',
              '& img': {
                width: { _: 24, md: 32 },
                height: 'auto',
              },
            }}
          >
            <Image src={iceCreamIcon} alt="Ice cream icon" />
          </Box>
        </Box>
      </Box>
      <Box sx={linksContainer}>
        <Link
          href="https://docs.crossplane.io/latest/whats-new/"
          muiProps={{ sx: linkStyle, target: '_blank' }}
        >
          Learn More
        </Link>
        <Link
          href="https://docs.crossplane.io/latest/get-started/install/"
          muiProps={{ sx: linkStyle, target: '_blank' }}
        >
          Try it Out
        </Link>
      </Box>
    </Box>
  );
};

export default V2Banner;
