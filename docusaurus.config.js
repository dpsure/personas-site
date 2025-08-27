// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Personas Hub',
  tagline: 'How to build with AI on AWS',
  url: 'https://dpsure.github.io',
  baseUrl: '/personas-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dpsure',
  projectName: 'personas-site',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/dpsure/personas-site/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig: ({
    image: 'img/social-card.png',
    navbar: {
      title: 'Personas Hub',
      logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/personas/landing', label: 'Personas', position: 'left' },
        { to: '/jobs/developer-agents', label: 'Build with AI Agents', position: 'left' },
        { href: 'https://github.com/dpsure/personas-site', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Personas',
          items: [
            { label: 'All Personas', to: '/personas/landing' },
            { label: 'Developer - Agents', to: '/jobs/developer-agents' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DP. Built with Docusaurus.`,
    },
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
  }),
};
module.exports = config;
