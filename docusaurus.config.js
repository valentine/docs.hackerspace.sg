// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const sb = require('./src/js/sidebars.js')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docs.hackerspace.sg',
  tagline: 'All the HackerspaceSG docs!',
  url: 'https://docs.hackerspace.sg',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hackerspacesg',
  projectName: 'docs.hackerspace.sg',

  markdown: {
    format: 'detect',
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/social.jpg',
    navbar: {
      title: 'HackerspaceSG',
      logo: {
        alt: 'HackerspaceSG',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'handbook/',
          activeBasePath: 'handbook',
          label: 'Handbook',
          position: 'left',
        },
        {
          to: 'plenum/',
          activeBasePath: 'plenum',
          label: 'Plenum',
          position: 'left',
        },
        {
          href: 'https://github.com/hackerspacesg/docs.hackerspace.sg',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://hackerspace.sg',
          label: 'Main Site',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'HackerspaceSG',
          items: [
            {
              label: 'Home',
              to: 'https://hackerspace.sg',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram Chat',
              href:
                'https://t.me/HackerspaceSG',
            },
            {
              label: 'Google Group',
              href:
                'https://groups.google.com/g/hackerspacesg',
            },
            {
              label: 'Facebook Group',
              href: 'https://www.facebook.com/groups/hackerspacesg/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hackerspacesg',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/hackerspacesg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/hackerspacesg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hackerspace.SG Pte Ltd and contributors.`,
    },
    prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
    },
  }),

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: false,
        blog: false,
      }),
    ],
  ],

  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'handbook',
        path: 'docs/handbook',
        editUrl:
          'https://github.com/hackerspacesg/docs.hackerspace.sg/blob/main/',
        routeBasePath: 'handbook',
        sidebarPath: require.resolve('./docs/sidebars.handbook.js'),
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'plenum',
        path: 'docs/plenum',
        editUrl:
          'https://github.com/hackerspacesg/docs.hackerspace.sg/blob/main/',
        routeBasePath: 'plenum',
        sidebarPath: require.resolve('./docs/sidebars.plenum.js'),
        numberPrefixParser: false,
        async sidebarItemsGenerator ({
          defaultSidebarItemsGenerator,
          ...args
        }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return sb.popUnshiftItems(sb.reverseSidebarItems(sidebarItems));
        },
      }),
    ],
  ],
};

module.exports = config;
