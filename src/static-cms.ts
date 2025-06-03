export const newsBannerData: NewsBanner | undefined = undefined;
/* commenting out the news banner while it is not being used, it can be added back by removing the comment
   block and removing the assignment to undefined just above.
{
  text:
    'New event! Level Up with Crossplane, presented by Upbound, goes deeper with Crossplane 1.15, compositions, ' +
    'testing patterns, and more.',
  button: [
    {
      id: 'news-learn-more-1-5',
      value: {
        icon: undefined,
        link: [
          {
            id: 'a253a327-e216-4764-aac3-c660a417359d',
            type: 'external_url',
            value:
              'https://blog.crossplane.io/go-deeper-with-control-planes-at-level-up-with-crossplane-presented-by-upbound/',
          },
        ],
        text: 'Learn more \u0026 register',
        has_arrow: false,
        style_type: 'whiteOutlined',
      },
    },
  ],
  banner_id: '1-5',
}; */

export const indexData: HomePage = {
  header: [
    {
      value: {
        title: 'Crossplane Is the Cloud-Native Framework for Platform Engineering',
        subtitle:
          'Create platforms like cloud providers: Build your own APIs and services with control planes. ' +
          'Extend Kubernetes to manage any resource anywhere. Use a library of components to assemble your ' +
          'platform faster.',
        buttons: [
          {
            value: {
              text: 'Get Started',
              style_type: 'turquoiseContained',
              link: [
                {
                  type: 'external_url',
                  value: 'https://docs.crossplane.io/latest/getting-started/',
                  id: '166370c8-47c8-4b5e-8940-b83685de0105',
                },
              ],
              has_arrow: false,
            },
            id: '1b7b265f-3b70-4329-8420-4eebcfcac261',
          },
          {
            value: {
              text: 'Learn More',
              style_type: 'whiteOutlined',
              link: [
                {
                  type: 'external_url',
                  value: 'https://docs.crossplane.io/latest/concepts/',
                  id: '12294e84-2fc5-47b5-b339-e3765f5ab34b',
                },
              ],
              has_arrow: false,
            },
            id: '613f7353-437d-4435-b6e4-199d1d9d5f18',
          },
        ],
      },
    },
  ],
  section_1_title: 'Created to power your platform',
  section_1_sub_title:
    'Upbound built Crossplane to help organizations build their platforms like the cloud vendors build theirs—with ' +
    'control planes. Crossplane is an open source, CNCF project built on the foundation of Kubernetes to ' +
    'orchestrate anything. Encapsulate policies, permissions, and other guardrails behind a custom API line to ' +
    'enable your customers to self-service without needing to become an infrastructure expert.',
  section_1_button: [
    {
      value: {
        text: 'Learn More About Upbound',
        style_type: 'turquoiseContained',
        link: [
          {
            type: 'external_url',
            value: 'https://www.upbound.io/',
            id: '9899c87a-5b8a-4de2-aecd-456cce51950a',
          },
        ],
        has_arrow: false,
      },
      id: '61e05ad8-8f8d-4c24-86ee-eb3fa74f7a3b',
    },
  ],
  section_1_slack_title_count: '13,440+',
  section_1_slack_title: 'Slack Members',
  section_1_slack_text: 'Adopted by hundreds of amazing companies',
  section_1_slack_button: [
    {
      value: {
        text: 'Join the Community',
        style_type: 'turquoiseContained',
        link: [
          {
            type: 'external_url',
            value: 'https://slack.crossplane.io/',
            id: '7e9f845f-6f95-41b7-962c-92f3d4a7960c',
          },
        ],
        has_arrow: false,
      },
      id: '22da97e1-2d77-405a-a192-66dbdaebb22f',
    },
  ],
  features_sections: [
    {
      value: {
        title: 'Extensible by design',
        text:
          'Crossplane is designed from the ground up with extension in mind. From Providers that extend ' +
          'Crossplane to orchestrate new kinds of applications and infrastructure, to Configurations that extend ' +
          'Crossplane to expose new APIs, our community will help you find what you need to build your ideal control ' +
          'plane. Interested in building your own extensions?',
        link_text: 'Join the Crossplane Slack Channel',
        link: [
          {
            type: 'external_url',
            value: 'https://slack.crossplane.io/',
            id: '7d9e32a7-75fd-4430-81d9-f6620ed2b94d',
          },
        ],
      },
      id: '90ca8f5c-e895-48c6-85a4-84be553869f7',
    },
    {
      value: {
        title: 'Putting you in control',
        text:
          'Most platforms require that you buy into their opinionated API concepts. With Crossplane you can ' +
          'build a platform around your own opinions. We know the best control planes are tailored to the task at ' +
          'hand so we designed Crossplane as a framework that puts you in control. Use Crossplane to design a ' +
          'control plane that exposes declarative APIs tailored to your unique orchestration needs.',
        link_text: 'Learn More',
        link: [
          {
            type: 'relative_url',
            value: '/why-control-planes',
            id: '5d0b6752-b221-426b-aa6a-5585decf6d4e',
          },
        ],
      },
      id: '067d5de1-0378-4d5a-9c52-41f706b3e087',
    },
    {
      value: {
        title: 'Built on a solid foundation',
        text:
          'Crossplane builds on the class leading Kubernetes control plane, extending its battle hardened ' +
          'reliability and security features like Role Based Access Control (RBAC) to orchestrate everything - not ' +
          'just containers. Because Crossplane shares a foundation with Kubernetes it integrates smoothly with most ' +
          'popular cloud native tools.',
        link_text: 'Learn More',
        link: [
          {
            type: 'external_url',
            value: 'https://crossplane.io/docs/',
            id: '2f3e317d-007f-47da-96be-3e465787d28a',
          },
        ],
      },
      id: '1fabf86c-3887-4df8-ab15-6e17e244dbbe',
    },
  ],
  section_3_title: 'All things Crossplane. All in one place.',
  section_3_text:
    'The Upbound Marketplace is the one-stop shop for all things Crossplane — finding, understanding, and consuming ' +
    'Crossplane providers and configurations is easy.',
  section_3_card_items: [
    {
      id: 1,
      image: [
        {
          type: 'svg_image',
          value: {
            svg_image: {
              title: 'aws-icon.svg',
              url: '/home-page/aws-icon.svg',
              view_box: '0 0 304 182',
            },
            width: undefined,
            height: undefined,
          },
          id: '45d9cb12-307c-4754-8696-889f95d64446',
        },
      ],
      title: 'provider-aws',
      text: 'The Amazon Web Services (AWS) Crossplane provider adds support for managing AWS resources in Kubernetes.',
      footer_text: '',
    },
    {
      id: 2,
      image: [
        {
          type: 'svg_image',
          value: {
            svg_image: {
              title: 'google-cloud-icon.svg',
              url: '/home-page/google-cloud-icon.svg',
              view_box: '0 0 2385.7 1919.9',
            },
            width: undefined,
            height: undefined,
          },
          id: '8a0a2a00-b282-431e-8245-bea22ac56993',
        },
      ],
      title: 'provider-gcp',
      text:
        'The Google Cloud Platform (GCP) Crossplane provider adds support for managing GCP resources in ' +
        'Kubernetes.',
      footer_text: '',
    },
    {
      id: 3,
      image: [
        {
          type: 'svg_image',
          value: {
            svg_image: {
              title: 'microsoft-icon-logo.svg',
              url: '/home-page/microsoft-icon-logo.svg',
              view_box: '0 0 2499.6 2500',
            },
            width: undefined,
            height: undefined,
          },
          id: 'beaed736-d119-496d-8908-06be2ffbfd28',
        },
      ],
      title: 'provider-azure',
      text: 'The Microsoft Azure Crossplane provider adds support for managing Azure resources in Kubernetes.',
      footer_text: '',
    },
  ],
  cta_section_title: 'Crossplane is open source and community driven',
  cta_section_text:
    'Crossplane is an open source control plane framework supported by the cloud-native community. Crossplane has ' +
    "been endorsed by some of the world's best companies and is released under the Apache 2.0 license. We remain " +
    'committed to our community and will always be vendor neutral.',
  cta_section_buttons: [
    {
      value: {
        text: 'Get Started With Crossplane',
        style_type: 'turquoiseContained',
        link: [
          {
            type: 'external_url',
            value: 'https://github.com/crossplane/crossplane',
            id: '449425b2-85dc-46bf-aa59-ada1dc3b672f',
          },
        ],
        has_arrow: false,
      },
      id: '30ac8e22-029b-4b24-99ac-e175bf394bf5',
    },
    {
      value: {
        text: 'Learn More',
        style_type: 'whiteOutlined',
        link: [
          {
            type: 'external_url',
            value: 'https://docs.crossplane.io/latest/concepts/',
            id: '0501eae5-3f2d-4721-ac75-989883ded410',
          },
        ],
        has_arrow: false,
      },
      id: 'bf1bf77b-7f1a-4b67-a064-0b90029ef522',
    },
  ],
  cms_head_props: {
    title: 'Crossplane Is the Cloud-Native Framework for Platform Engineering',
    seo_title: 'Crossplane Is the Cloud-Native Framework for Platform Engineering',
    search_description:
      'Create platforms like cloud providers by building your own APIs and services with ' +
      'control planes, extending Kubernetes to manage any resource anywhere, and using a library of components to ' +
      'assemble your platform faster.',
    seo_keywords: 'crossplane, kubernetes, platform engineering, control planes, cloud native',
    og_twitter_title: 'Crossplane Is the Cloud-Native Framework for Platform Engineering',
    og_twitter_url: 'https://www.crossplane.io/',
    og_twitter_description:
      'Create platforms like cloud providers by building your own APIs and services with ' +
      'control planes, extending Kubernetes to manage any resource anywhere, and using a library of components to ' +
      'assemble your platform faster',
    og_twitter_image: {
      meta: {
        download_url: '/og-images/crossplane-og.jpg',
      },
    },
    twitter_card: 'summary',
    twitter_site: '@crossplane_io',
    twitter_creator: '',
    slug: 'home-page',
  },
};
