import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import { Box, Typography, SxProps } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

// import Link from 'src/elements/Link';
import Button from 'src/elements/Button';

import closeIcon from 'public/icons/close-icon.svg';

const root: SxProps = {
  position: 'fixed',
  width: '100%',
  bottom: { _: '0', md: 'unset' },
  zIndex: 1200,
  py: { _: 0.75, md: 1 },
  pr: { _: '40px', md: '74px' },
  pl: { _: 2, md: 2 },
  bgcolor: COLORS.brightSun,
  color: COLORS.nileBlue,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

type NewsBannerProps = {
  setNewsBannerHeight: React.Dispatch<React.SetStateAction<number>>;
  newsBannerClosed?: boolean;
  setNewsBannerClosed: React.Dispatch<React.SetStateAction<boolean>>;
  data: NewsBanner;
};

const NewsBanner = ({
  setNewsBannerHeight,
  newsBannerClosed,
  setNewsBannerClosed,
  data,
}: NewsBannerProps) => {
  const newsBannerRef = useRef<HTMLDivElement | null>(null);
  const { banner_id, text, button } = data;

  const handleClick = () => {
    // When the close button is clicked, set the flag in local storage to hide the NewsBanner.
    localStorage.setItem('newsBannerClosed', `${banner_id}`);
    setNewsBannerClosed(true);
  };

  useEffect(() => {
    // Check the local storage flag when the component mounts.
    const isNewsBannerClosed = localStorage.getItem('newsBannerClosed');
    if (isNewsBannerClosed === `${banner_id}`) {
      setNewsBannerClosed(true);
    } else {
      setTimeout(() => {
        setNewsBannerClosed(false);
      }, 350);
    }
  }, []);

  // Get newsbanner height as it responds to update top styling amount of PageHeader
  useEffect(() => {
    const updateNewsBannerHeight = () => {
      if (newsBannerRef.current) {
        const height = newsBannerRef.current.clientHeight;
        setNewsBannerHeight(height);
      }
    };

    updateNewsBannerHeight();

    window.addEventListener('resize', updateNewsBannerHeight);

    return () => {
      window.removeEventListener('resize', updateNewsBannerHeight);
    };
  }, []);

  return (
    <Box
      ref={newsBannerRef}
      sx={{
        transform: !newsBannerClosed ? 'translateY(0)' : 'translateY(100%)',
        transitionDuration: '1s',
        [MQ.md]: {
          transform: !newsBannerClosed ? 'translateY(0)' : 'translateY(-100%)',
        },
        ...root,
      }}
    >
      <Box sx={{ textAlign: { _: 'center', md: 'left' } }}>
        <Typography
          variant="body2"
          sx={{ fontSize: { _: '16px', md: '18px' }, lineHeight: '26px', fontWeight: 500 }}
        >
          {text}
        </Typography>
      </Box>
      <Box
        sx={{
          minWidth: 175,
          textAlign: { _: 'center', md: 'left' },
          ml: { _: 0, md: 2 },
          mt: { _: 1.5, md: 0 },
        }}
      >
        {button && button[0] && button[0].value && (
          <Button sizeType="normal" cmsValue={button[0].value}>
            {button[0].value.text}
          </Button>
        )}
      </Box>
      <Box
        onClick={handleClick}
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: { _: '40px', md: '74px' },
          height: '100%',
          right: 0,
          top: 0,
          borderLeft: { md: '2px solid rgba(0, 0, 0, 0.1)' },
          color: COLORS.nileBlue,
          cursor: 'pointer',
        }}
      >
        <Image src={closeIcon} alt="menu icon" style={{ width: 24, height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default NewsBanner;
