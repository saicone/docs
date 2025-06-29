import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  ezlib: [
    {
      type: 'autogenerated',
      dirName: 'ezlib',
    },
  ],
  rtag: [
    {
      type: 'autogenerated',
      dirName: 'rtag',
    },
  ],
  uclansync: [
    {
      type: 'autogenerated',
      dirName: 'uclansync',
    },
  ],
  delivery4j: [
    {
      type: 'autogenerated',
      dirName: 'delivery4j',
    },
  ],
  settings: [
    {
      type: 'autogenerated',
      dirName: 'settings',
    },
  ],
  mcode: [
    {
      type: 'autogenerated',
      dirName: 'mcode',
    },
  ],
  pixelbuy: [
    {
      type: 'autogenerated',
      dirName: 'pixelbuy',
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
