import React from 'react';

import Image from 'next/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import * as routes from 'src/routes';

import PageProvider from 'src/components/PageProvider';
import Section from 'src/components/Section';
import Button from 'src/elements/Button';
import Link from 'src/elements/Link';

import createdBy from 'public/created-by-upbound.svg';
import headerImage from 'public/static-media/why-header-img.png';
import icon_1 from 'public/static-media/icons/declarative.svg';
import icon_2 from 'public/static-media/icons/unify.svg';
import icon_3 from 'public/static-media/icons/infrastructure.svg';
import icon_4 from 'public/static-media/icons/automate.svg';
import icon_5 from 'public/static-media/icons/built.svg';
import icon_6 from 'public/static-media/icons/separation.svg';

const headerSection: SxProps = {
  pt: { _: 13, md: 23.5 },
  pb: { _: 13, md: 16 },
};

const headerButtons: SxProps = {
  mt: 5,
  mb: { _: 6, md: 0 },
  display: 'flex',
  flexDirection: { _: 'column', lg: 'row' },

  '& > button, a': {
    mr: { _: 0, lg: '10px' },

    ':not(:last-of-type)': {
      mb: { _: '20px', lg: 0 },
    },
  },
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 6,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gap: 9,
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
};

const gridItem: SxProps = {
  borderBottom: `1px solid ${COLORS.blueBayoux}`,
  pb: 5,

  '&:nth-last-child(1)': {
    borderBottom: `none`,
    pb: 0,
  },

  [MQ.md]: {
    pb: 8,
    '&:nth-last-child(2)': {
      borderBottom: 'none',
      pb: 0,
    },
  },
};

const iconStyles: SxProps = {
  position: 'relative',
  width: '50px',
  height: '50px',
  mb: 3,
};

const HeaderSection = () => {
  return (
    <Box
      sx={{
        [MQ.md]: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        },
      }}
    >
      <Box
        sx={{
          pr: { _: 0, md: 5 },
          width: { _: '100%', md: '50%' },
        }}
      >
        <Typography variant="h2" color="#fff" sx={{ mb: 5 }}>
          Control planes — the foundation of modern cloud and the future of AI
        </Typography>
        <Typography variant="body_normal" color="#fff">
          The cloud vendors have been building with control planes for years. Now Crossplane helps
          you do the same. Control planes are self-healing—they automatically correct drift.
          Engineers and AI agents can self-service fast using declarative APIs. Control planes offer
          a single point of control for policy and permissions, preventing people and automation
          alike from making costly mistakes.
        </Typography>
        <Box sx={headerButtons}>
          <Button styleType="turquoiseContained" href={routes.resourcesUrl} target="_blank">
            Learn more
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          pl: { _: 0, md: 5 },
          width: { _: '100%', md: '50%' },
        }}
      >
        <Image
          src={headerImage}
          alt="header image"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
};

const whyItems = [
  {
    icon: icon_1,
    title: 'Declarative infrastructure management',
    // eslint-disable-next-line max-len
    text: 'Crossplane lets you build a control plane for anything, with Kubernetes-style declarative and API-driven configuration. You describe what you want, not the steps to get there. The control plane figures out execution. You design the APIs, so engineers and AI agents can only do what you let them. Your APIs are self-describing, so they can also discover what is possible on-demand.',
  },
  {
    icon: icon_2,
    title: 'Unify application and infrastructure configuration and deployment',
    // eslint-disable-next-line max-len
    text: 'Crossplane enables application and infrastructure configuration to co-exist in the same control plane, giving both engineers and automated systems one place to understand and manage changes.',
  },
  {
    icon: icon_3,
    title: 'A single source of truth for infrastructure',
    // eslint-disable-next-line max-len
    text: 'Control planes built with Crossplane integrate with CI/CD pipelines, so teams can create, track, and approve changes using GitOps best practices. A single source of truth is essential not just for humans, but for automated systems and AI-driven tooling that need consistent, auditable inputs.',
  },
  {
    icon: icon_4,
    title: 'Automate operational tasks with reconciling controllers',
    // eslint-disable-next-line max-len
    text: 'Your control planes are made up of several controllers, which are responsible for the entire lifecycle of a resource. Each resource is responsible for provisioning, health, scaling, failover, and actively responding to external changes that deviate from the desired configuration. This reconciliation loop provides a stable execution model that higher-level automation and AI systems can build on without bypassing safety or policy.',
  },
  {
    icon: icon_5,
    title: 'Built with high levels of extensibility',
    // eslint-disable-next-line max-len
    text: 'Control planes built with Crossplane leverage broadly accepted Kubernetes patterns, making it easily extensible by adding your own APIs and controllers. Increase flexibility and security by baking policies, quotas, and permissions into a custom definition.',
  },
  {
    icon: icon_6,
    title: 'A strong separation of concerns.',
    // eslint-disable-next-line max-len
    text: "Crossplane lets you bake in organisational concepts and policy at the API level, allowing your customers the freedom to self-service within the bounds of the control plane APIs you've defined.",
  },
];

// NOTE: <IMAGE> USED FOR CMS PURPOSES
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type WhyItemProps = {
  whyItem: {
    icon: string | StaticImport;
    title: string;
    text: string;
  };
};

const WhyItemSection = ({ whyItem }: WhyItemProps) => {
  const { icon, title, text } = whyItem;

  return (
    <Box sx={gridItem}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={iconStyles}>
          <Image src={icon} alt="provider icon" sizes="100vw" fill style={{ objectFit: 'cover' }} />
        </Box>
      </Box>
      <Box>
        <Typography
          variant="body_normal"
          sx={{
            mb: 2,
            ...fontAvenirBold,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body_small">{text}</Typography>
      </Box>
    </Box>
  );
};

type Props = {};

const Why = ({}: Props) => {
  return (
    <PageProvider ctaBtnTarget="_blank">
      <Section sx={headerSection}>
        <HeaderSection />
      </Section>

      <Section
        angleTop="topRight"
        sx={{
          pt: { _: 16, md: 23.5 },
          pb: { _: 16, md: 23.5 },
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2">Why use Crossplane to build control planes?</Typography>
        </Box>
        <Box sx={{ mt: { _: 5, md: 10 }, ...gridLayout }}>
          {whyItems.map((whyItem) => (
            <WhyItemSection key={whyItem.title} whyItem={whyItem} />
          ))}
        </Box>
        <Box sx={{ maxWidth: 950, textAlign: 'center', mx: 'auto', pt: { _: 16, md: 23.5 } }}>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Crossplane was originally created by Upbound
          </Typography>
          <Typography variant="body_normal" sx={{ mb: 4 }}>
            Upbound helps you build, deploy, and manage intelligent internal cloud platforms using
            control planes, powered by Crossplane and optimized by Upbound.
          </Typography>
          <Link
            href={routes.upboundUrl}
            muiProps={{ target: '_blank', rel: 'noopener noreferrer' }}
          >
            <Box sx={{ maxWidth: 269, mx: 'auto' }}>
              <Image
                src={createdBy}
                alt="Created by Upbound"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Link>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Why;
