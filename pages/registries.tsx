import React from 'react';

import Image from 'next/future/image';

import { Box, Container, SxProps, Typography } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import * as routes from 'src/routes';

import PageProvider from 'src/components/PageProvider';
import Section from 'src/components/Section';
import Link from 'src/elements/Link';
import Button from 'src/elements/Button';
import UnorderedList from 'src/elements/UnorderedList'

import cncfLogoColor from 'public/cncf-logo-color.png';
import gradientGraphicHeader from 'public/background-graphics/gradient-graphic-header.png';
import gradientGraphicSM from 'public/background-graphics/gradient-graphic-sm.png';
import upboundMarketplace from 'public/upbound-marketplace.svg';

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

const Why = () => {
  return (
    <PageProvider ctaBtnTarget="_blank">
      <Section sx={headerSection}>
        <Typography variant="h2" textAlign="center" color="#fff" sx={{ mb: 5 }}>
          Public Crossplane Package Registries
        </Typography>
        <Typography variant="body_normal" textAlign="center" color="#fff">
          Check out the public registries below to find Crossplane providers, functions, configurations
          and more.
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
                src={upboundMarketplace}
                alt="upboundMarketplace"
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
              The Upbound Marketplace is the one-stop shop for all things Crossplane — finding, understanding, and consuming Crossplane providers, functions and configurations is easy.
            </Typography>
            <Box sx={btnContainer}>
              <Button styleType="turquoiseContained" href={routes.upboundMarketUrl} target="_blank">
                Visit
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
        <Box
          sx={{
            textAlign: 'center'
          }}
        >

          <Typography variant="body_normal" sx={{ whiteSpace: 'break-spaces' }}>
            We welcome <Link href={"https://github.com/crossplane/website"}
              muiProps={{
                target: '_blank',
                fontWeight: 700,
                underline: 'always',
                color: COLORS.turquoise,
              }}>PRs</Link> to add new registries that meet the following criteria:
          </Typography>
          <Container maxWidth="md">
            <Box
              sx={{
                ml: 6,
                mr: 6
              }}
            >
              <UnorderedList>
                <li>Understands the xpkg format of Crossplane extensions</li>
                <li>Are publicly accessible with publicly viewable repositories</li>
                <li>Offers Crossplane extensions (packages) that can be downloaded and installed by the community</li>
              </UnorderedList>
            </Box>
          </Container>
          <Typography variant="body_normal" sx={{ whiteSpace: 'break-spaces' }}>
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
            and we can assist you in adding your logo to this page.
          </Typography>

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
