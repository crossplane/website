import React from 'react';

import Image from 'next/future/image';
import { GetStaticProps } from 'next';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import * as routes from 'src/routes';

import PageProvider from 'src/components/PageProvider';
import Section from 'src/components/Section';
import Link from 'src/elements/Link';
import Button from 'src/elements/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import upboundLogo from 'public/upbound-logo.svg';
import vshnLogo from 'public/vshn-logo.svg';
import cncfLogoColor from 'public/cncf-logo-color.png';
import gradientGraphicHeader from 'public/background-graphics/gradient-graphic-header.png';
import gradientGraphicSM from 'public/background-graphics/gradient-graphic-sm.png';
import getNewsBannerData from 'src/utils/getNewsBannerData';

const headerSection: SxProps = {
  position: 'relative',
  pt: { _: 13, md: 23.5 },
  pb: { _: 13, md: 31 },
  maxWidth: 800,
  mx: 'auto',
};

const cardStyles: SxProps = {
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
  maxWidth: 750,
  mt: 5,
  mx: 'auto',
  p: 5,

  [MQ.md]: {
    display: 'flex',
    alignItems: 'center',
    mt: 0,
  },
};

const absoluteCardStyles: SxProps = {
  [MQ.md]: {
    position: 'absolute',
    zIndex: 2,
    bottom: -150,
    left: 0,
    right: 0,
  },
};

const btnContainer: SxProps = {
  mt: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: { _: 'center', md: 'left' },
  flexDirection: { _: 'column', xs: 'row' },

  '& .MuiButton-startIcon': {
    mr: 1.25,
    display: 'flex',
    alignItems: 'center',
  },

  '& > button, a': {
    mx: { _: 0, xs: '10px' },

    ':first-of-type': {
      ml: 0,
      mb: { _: 5, xs: 0 },
    },
    '& ~ a': {
      mr: 0,
    },
  },
};

type Props = {};

const Why = ({}: Props) => {
  return (
    <PageProvider ctaBtnTarget="_blank">
      <Section sx={headerSection}>
        <Typography variant="h2" textAlign="center" color="#fff" sx={{ mb: 5 }}>
          Companies with Commercial Crossplane Offerings
        </Typography>
        <Typography variant="body_normal" textAlign="center" color="#fff">
          Check out the Upbound Marketplace to find Crossplane providers, listings, configurations
          and more.{' '}
          <Link
            href={routes.upboundMarketUrl}
            muiProps={{ color: COLORS.turquoise, fontWeight: 600, target: '_blank' }}
          >
            Head to the marketplace
          </Link>
          .
        </Typography>
        <Box sx={{ maxWidth: 476, mx: 'auto', mt: 6 }}>
          <Image
            src={gradientGraphicHeader}
            alt="gradient graphic"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Box sx={[cardStyles, absoluteCardStyles]}>
          <Box sx={{ width: { _: '100%', md: '50%' }, pr: { _: 0, md: 5 } }}>
            <Box sx={{ maxWidth: 295, mx: 'auto', mb: { _: 3, md: 0 } }}>
              <Image
                src={upboundLogo}
                alt="upbound logo"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Box>
          <Box sx={{ width: { _: '100%', md: '50%' } }}>
            <Typography
              variant="body_normal"
              sx={{
                mb: 2,
              }}
            >
              Upbound is the creator of open source Crossplane. With security, support, and
              official providers, Upbound’s platform gives you everything you need to scale
              Crossplane and manage all your infrastructure in one place.
            </Typography>
            <Box sx={btnContainer}>
              <Button styleType="turquoiseContained" href={routes.upboundUrl} target="_blank">
                Learn More
              </Button>
              <Button
                styleType="darkOutlined"
                startIcon={<GitHubIcon />}
                href={routes.githubUrl}
                target="_blank"
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </Box>
      </Section>

      <Section
        angleTop="topRight"
        sx={{
          pt: { _: 16, md: 23.5 },
          backgroundColor: '#fff',
        }}
      >
        <Box sx={cardStyles}>
          <Box sx={{ width: { _: '100%', md: '50%' }, pr: { _: 0, md: 5 } }}>
            <Box sx={{ maxWidth: 295, mx: 'auto', mb: { _: 3, md: 0 } }}>
              <Image
                src={vshnLogo}
                alt="vshn logo"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Box>
          <Box sx={{ width: { _: '100%', md: '50%' } }}>
            <Typography
              variant="body_normal"
              sx={{
                mb: 2,
              }}
            >
              VSHN, a seasoned adopter of Crossplane in live environments, brings a wealth of daily
              usage expertise to your Crossplane project. With our extensive experience, rest
              assured that your Crossplane deployment is in capable hands.
            </Typography>
            <Box sx={btnContainer}>
              <Button
                styleType="turquoiseContained"
                href="https://products.vshn.ch/crossplane_support.html"
                target="_blank"
              >
                Learn More
              </Button>
              <Button
                styleType="darkOutlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/vshn/"
                target="_blank"
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            pt: { _: 6, md: 10 },
          }}
        >
          <Box
            sx={{
              pb: { _: 6, md: 10 },
              borderBottom: `1px solid ${COLORS.blueBayoux}`,
              '& a': {
                textDecorationColor: COLORS.turquoise,
              },
            }}
          >
            <Typography variant="body_normal" sx={{ whiteSpace: 'break-spaces' }}>
              Building on top of Crossplane or offering support? {'\n'}
              <Link
                href="mailto:info@crossplane.io"
                muiProps={{
                  target: '_blank',
                  fontWeight: 700,
                  underline: 'always',
                  color: COLORS.turquoise,
                }}
              >
                Let us know
              </Link>{' '}
              and we will add your logo to this page.
            </Typography>
          </Box>
          <Box
            sx={{
              pt: { _: 13, md: 16 },
              pb: { _: 13, md: 16 },
            }}
          >
            <Box sx={{ maxWidth: 350, mx: 'auto', mb: 5 }}>
              <Image
                src={cncfLogoColor}
                alt="cncfLogoColor"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Typography variant="h5" sx={{ mb: 0 }}>
              Crossplane is a Cloud Native Computing Foundation project
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 476, mx: 'auto' }}>
            <Image
              src={gradientGraphicSM}
              alt="gradient graphic"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Why;

export const getStaticProps: GetStaticProps = async () => {
  const newsBannerData = await getNewsBannerData();

  return {
    props: {
      newsBannerData,
    },
  };
};
