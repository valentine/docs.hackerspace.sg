/** @type {import('@docusaurus/types').DocusaurusConfig} */

const sb = require('./src/js/sidebars.js')

module.exports = {
  title: 'docs.hackerspace.sg',
  tagline: 'All the HackerspaceSG docs!',
  url: 'https://docs.hackerspace.sg',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hackerspacesg',
  projectName: 'docs.hackerspace.sg',
  themeConfig: {
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: false,
        blog: false,
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'handbook',
        path: 'docs/handbook',
        editUrl:
          'https://github.com/hackerspacesg/docs.hackerspace.sg/edit/main/',
        routeBasePath: 'handbook',
        sidebarPath: require.resolve('./docs/sidebars.handbook.js'),
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'plenum',
        path: 'docs/plenum',
        editUrl:
          'https://github.com/hackerspacesg/docs.hackerspace.sg/edit/main/',
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
      },
    ],
  ],
};
