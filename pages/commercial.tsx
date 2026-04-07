import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { GetServerSideProps } from 'next';

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
import alaudaLogo from 'public/alauda-logo.svg';
import infracloudLogo from 'public/infracloud-logo.svg';
import cloudflavorLogo from 'public/home-page/cloudflavor.svg';
import procedureLogo from 'public/procedure-logo.svg';
import kodekloudLogo from 'public/kodekloud-logo.svg';
import cncfLogoColor from 'public/cncf-logo-color.png';
import gradientGraphicHeader from 'public/background-graphics/gradient-graphic-header.png';
import gradientGraphicSM from 'public/background-graphics/gradient-graphic-sm.png';

interface Company {
  logo: StaticImageData;
  alt: string;
  description: string;
  learnMoreUrl: string;
  githubUrl: string;
  name?: string;
}

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
  mb: 5,
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
    bottom: -190,
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

// Company data
const companies: Company[] = [
  {
    logo: upboundLogo,
    alt: 'upbound logo',
    description:
      'Upbound is the creator of open source Crossplane. With security, support, and official ' +
      "providers, Upbound's platform gives you everything you need to scale Crossplane and manage " +
      'all your infrastructure in one place.',
    learnMoreUrl: routes.upboundUrl,
    githubUrl: 'https://github.com/upbound/',
  },
  {
    logo: vshnLogo,
    alt: 'vshn logo',
    description:
      'VSHN, a seasoned adopter of Crossplane in live environments, brings a wealth of daily usage ' +
      'expertise to your Crossplane project. With our extensive experience, rest assured that your ' +
      'Crossplane deployment is in capable hands.',
    learnMoreUrl: 'https://products.vshn.ch/crossplane_support.html',
    githubUrl: 'https://github.com/vshn/',
  },
  {
    logo: alaudaLogo,
    alt: 'alauda logo',
    description:
      'Alauda uses Crossplane to provide application delivery and infrastructure provisioning in ' +
      'production environments. It empowers organizations to streamline application delivery and ' +
      'ensure consistent configurations.',
    learnMoreUrl: 'https://www.alauda.io/community/159726',
    githubUrl: 'https://github.com/alauda',
  },
  {
    logo: infracloudLogo,
    alt: 'InfraCloud logo',
    description:
      'Unlock the power of Crossplane with InfraCloud. The seasoned team offers consulting, ' +
      'implementation, and managed services to simplify your infrastructure management. Focus on ' +
      'innovation, not operations, with their support.',
    learnMoreUrl: 'https://www.infracloud.io/crossplane-consulting-support/',
    githubUrl: 'https://github.com/infracloudio',
  },
  {
    logo: cloudflavorLogo,
    alt: 'Cloudflavor logo',
    name: 'Cloudflavor',
    description:
      'Cloudflavor provides comprehensive Crossplane consulting and managed services to help ' +
      'organizations adopt and scale their cloud-native infrastructure. With deep expertise in ' +
      'Kubernetes and cloud platforms, they enable seamless infrastructure automation and management.',
    learnMoreUrl: 'https://cloudflavor.io/products/crossplane/',
    githubUrl: 'https://github.com/cloudflavor',
  },
  {
    logo: procedureLogo,
    alt: 'Procedure logo',
    name: 'Procedure',
    description:
      'Procedure provides Crossplane consulting, implementation, and support services to help ' +
      'organizations adopt cloud-native infrastructure automation. With expertise in Kubernetes ' +
      'and multi-cloud environments, they help teams build and manage control planes at scale.',
    learnMoreUrl: 'https://procedure.tech/services/crossplane-consulting',
    githubUrl: 'https://github.com/proceduretech',
  },
  {
    logo: kodekloudLogo,
    alt: 'KodeKloud logo',
    name: 'KodeKloud',
    description:
      'KodeKloud offers hands-on Crossplane training through guided labs and real practice ' +
      'environments. Build practical control-plane and platform skills alongside Kubernetes and ' +
      'cloud-native workflows.',
    learnMoreUrl: 'https://kode.wiki/41OZSIX',
    githubUrl: 'https://github.com/kodekloudhub',
  },
];

// Fisher-Yates shuffle with random ordering
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Helper function to render a company card
const renderCompanyCard = (company: Company, extraSx?: SxProps) => {
  const logoContent = (
    <Box sx={{ maxWidth: 295, mx: 'auto', mb: { _: 3, md: 0 } }}>
      <Image
        src={company.logo}
        alt={company.alt}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  );

  const combinedSx = extraSx ? ([cardStyles, extraSx] as SxProps) : cardStyles;

  return (
    <Box sx={combinedSx} key={company.alt}>
      <Box sx={{ width: { _: '100%', md: '50%' }, pr: { _: 0, md: 5 } }}>{logoContent}</Box>
      <Box sx={{ width: { _: '100%', md: '50%' } }}>
        <Typography variant="body_normal" sx={{ mb: 2 }}>
          {company.description}
        </Typography>
        <Box sx={btnContainer}>
          <Button styleType="turquoiseContained" href={company.learnMoreUrl} target="_blank">
            Learn More
          </Button>
          <Button
            styleType="darkOutlined"
            startIcon={<GitHubIcon />}
            href={company.githubUrl}
            target="_blank"
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

interface CommercialProps {
  shuffledCompanies: Company[];
}

const Commercial = ({ shuffledCompanies }: CommercialProps) => {
  return (
    <PageProvider ctaBtnTarget="_blank">
      <Section sx={headerSection}>
        <Typography variant="h2" textAlign="center" color="#fff" sx={{ mb: 5 }}>
          Companies with Commercial Crossplane Offerings
        </Typography>
        <Box sx={{ maxWidth: 476, mx: 'auto', mt: 6 }}>
          <Image
            src={gradientGraphicHeader}
            alt="gradient graphic"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        {renderCompanyCard(shuffledCompanies[0], absoluteCardStyles)}
      </Section>

      <Section
        angleTop="topRight"
        sx={{
          pt: { _: 16, md: 23.5 },
          backgroundColor: '#fff',
        }}
      >
        {shuffledCompanies.slice(1).map((company) => renderCompanyCard(company))}

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
                href="mailto:crossplane-info@lists.cncf.io"
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

export const getServerSideProps: GetServerSideProps<CommercialProps> = async () => {
  // Shuffle companies on the server for each page load
  const shuffledCompanies = shuffleArray(companies);

  return {
    props: {
      shuffledCompanies,
    },
  };
};

export default Commercial;
