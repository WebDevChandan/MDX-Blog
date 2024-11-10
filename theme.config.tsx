import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import NextraDocsTemplateLink from './components/Footer'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: <NextraDocsTemplateLink />
  },
}

export default config
