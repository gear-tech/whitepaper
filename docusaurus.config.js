// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Whitepaper website',
  tagline: 'Dinosaurs are cool',
  url: 'https://whitepaper.gear-tech.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  onDuplicateRoutes: 'log',
  favicon: '/img/favicon-32x32.png',
  organizationName: 'Gear Technologies', // Usually your GitHub org/user name.
  projectName: 'Whitepaper', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gear-tech/whitepaper/edit/master/',
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
      colorMode: {
        defaultMode: 'light',
      },
      navbar: {
        title: 'Gear Whitepaper',
        logo: {
          alt: 'Gear Whitepaper website',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            href: 'https://gear-tech.io',
            label: 'Gear-tech.io',
            position: 'right',
          },
          {
            href: 'https://github.com/gear-tech',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'toml'],
      },
    }),
};

module.exports = config;
