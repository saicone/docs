// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saicone Documentation',
  tagline: 'Information about saicone projects',
  url: 'https://docs.saicone.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'saicone', // github org name.
  projectName: 'docs', // repo name
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: ({ docPath }) => `https://github.com/saicone/docs/blob/main/docs/${docPath}`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Saicone Docs',
        logo: {
          alt: 'Saicone Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            href: 'https://saic.one/discord',
            'aria-label': 'Discord',
            position: 'right',
            className: 'header-icon-link header-discord-link',
          },
          {
            href: 'https://github.com/saicone',
            'aria-label': 'GitHub',
            position: 'right',
            className: 'header-icon-link header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Documentation',
                to: 'about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://saic.one/discord',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/saicone',
              },
              {
                label: 'Javadoc',
                href: 'https://javadoc.saicone.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Saicone`,
      },
      prism: {
        additionalLanguages: [
          "groovy",
          "java",
          "javastacktrace",
          "kotlin",
          "properties",
          "yaml",
        ],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'S4RBI9VFOJ',
        apiKey: '9b1a230555dbb6a03c4472501bad05fa',
        indexName: 'saicone',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
