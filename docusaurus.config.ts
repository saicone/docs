import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Saicone Documentation',
  tagline: 'Information about saicone projects',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.saicone.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'saicone', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: ({ docPath, locale }) => {
            let index = docPath.indexOf('/');
            let localePath = locale == 'en' ? 'default' : locale;
            return `https://github.com/saicone/${docPath.substring(0, index)}/blob/main/docs/${localePath}${docPath.substring(index)}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
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
      copyright: `Copyright © ${new Date().getFullYear()} Saicone. Built with Docusaurus.`,
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'S4RBI9VFOJ',
      apiKey: '9b1a230555dbb6a03c4472501bad05fa',
      indexName: 'saicone',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
