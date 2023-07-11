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
  organizationName: 'saicone', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

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
          editUrl: ({ docPath }) => `https://github.com/saicone/docs/blob/master/docs/${docPath}`,
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
            href: 'https://discord.saicone.com',
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
                href: 'https://discord.saicone.com',
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
        ],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
