import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import { Box, SxProps, useMediaQuery } from '@mui/material';
import { MQ } from 'src/theme';

const root: SxProps = {
  '.axis-vertical .slide': {
    my: 3.75,
  },
  '.axis-horizontal .slide': {
    px: 1.875,
  },
  '.carousel.carousel-slider': {
    overflow: 'visible',
  },
  '.carousel .slider-wrapper': {
    overflow: 'visible',
  },
  '.carousel .slide': {
    textAlign: 'left',
    display: 'flex',
  },
  '.slide > div': {
    opacity: '.25',
    flex: '1',
  },
  '.selected > div': {
    opacity: '1',
    backgroundImage: `linear-gradient(-45deg, transparent 35px, #6D64F5 0%, #C9C3FF 100%)`,

    [MQ.sm]: {
      backgroundImage: `linear-gradient(-45deg, transparent 75px, #6D64F5 0%, #C9C3FF 100%)`,
    },
  },
};

type Props = {
  children: React.ReactChild[];
  axis?: 'vertical' | 'horizontal';
};

const Slider = ({ children, axis = 'horizontal' }: Props) => {
  const matches = useMediaQuery(MQ.md);
  const [sliderIndex, setSliderIndex] = useState(0);
  console.log(matches);
  return (
    <Box sx={root}>
      <Carousel
        axis={axis}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        interval={7000}
        infiniteLoop={true}
        centerMode={matches}
        emulateTouch={!matches}
        swipeable={!matches}
        stopOnHover={false}
        showThumbs={false}
        onClickItem={(index) => setSliderIndex(index)}
        selectedItem={sliderIndex}
      >
        {children}
      </Carousel>
    </Box>
  );
};

export default Slider;
