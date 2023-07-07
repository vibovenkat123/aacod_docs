import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
      return {
        titleTemplate: '%s - AACOD',
      }
  },
  logo: <span>AACOD</span>,
  project: {
    link: 'https://github.com/vibovenkat123/aacod',
  },
  docsRepositoryBase: 'https://github.com/vibovenkat123/aacod_docs/tree/main',
  footer: {
    text: 'AACOD Docs',
  },
}

export default config
