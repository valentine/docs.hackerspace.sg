# docs.hackerspace.sg 💥

> HackerspaceSG is Singapore's very own Hackerspace.
>
> There are hundreds of such [hackerspaces](http://www.hackerspaces.org/) around the world, where people with common interests in computers, technology, science, digital and electronic art, come together to meet, socialise and collaborate.
>
> Built by and for geeks, nerds, inventors, engineers, and entrepreneurs, Hackerspace.SG is the Singapore hacker community's home, living room and laboratory. Come hang out with the community in the evenings. Co-work with us during the day. We also host regular events, meetups, presentations, workshops, and movie nights for the local community.

## Managing Content

1. [Sign up](https://github.com/join) for a GitHub account
2. [Create a fork](https://github.com/hackerspacesg/docs.hackerspace.sg/fork) of the repository ([doc](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo))
3. You may edit files via the web-based [GitHub editor](https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository), with a desktop client, or with the [command-line interface](https://git-scm.com/docs)
   - Clients include:
     - Official GitHub client ([Mac](https://mac.github.com/) and [Windows](https://windows.github.com/))
     - [SourceTree](http://www.sourcetreeapp.com/) (Mac and Windows)
     - [GitKraken](https://www.gitkraken.com/) (Mac, Linux, and Windows)
     - [And many others](https://git-scm.com/downloads/guis)!

GitHub has [awesome documentation](https://docs.github.com/en/github).

### Adding and editing content

HackerspaceSG prefers the [fork and pull](https://opensource.guide/how-to-contribute/#opening-a-pull-request) model of collaboration. Content is stored in the [/docs](https://github.com/hackerspacesg/docs.hackerspace.sg/tree/master/docs) directory, in [Markdown files](https://www.markdownguide.org/cheat-sheet/).

All new commits should first be pushed to your own fork of the repository, and then requested to be merged via a [pull request](https://github.com/hackerspacesg/docs.hackerspace.sg/compare/).

Pull requests merge one particular branch with another. If you're editing multiple aspects of the website at once, please create [multiple branches](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository), and file separate pull requests for each individual aspect.

We use [Docusaurus](https://docusaurus.io/), an open-source static site generator built on React, and mostly supported by Facebook.

## Docusaurus Instructions

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Licences

Copyright (c) 2009 Hackerspace.SG Pte Ltd and contributors.

Code is [licensed under the GNU Affero General Public License (AGPL)](./LICENCE).

Documentation (e.g. `.md` files in the `/docs` folder) is [licensed under the Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0) International Licence](./docs-LICENSING).
