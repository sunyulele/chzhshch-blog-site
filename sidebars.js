/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const { sidebar: timelineSidebar } = require('./sidebars/timeline');

// const { sidebar: stocksSidebar } = require('./sidebars/stocks');
// const { sidebar: economicsSidebar } = require('./sidebars/economics');
// const { sidebar: essaysSidebar } = require('./sidebars/essays');
// const { sidebar: mathSidebar } = require('./sidebars/math');
// const { sidebar: musicSidebar } = require('./sidebars/music');
// const { sidebar: entertainmentSidebar } = require('./sidebars/entertainment');
// const { sidebar: confuciusSidebar } = require('./sidebars/confucius');
// const { sidebar: zenSidebar } = require('./sidebars/zen');
// const { sidebar: poemsSidebar } = require('./sidebars/poems');
// const { sidebar: fluidSidebar } = require('./sidebars/fluid');
const { sidebar: othersSidebar } = require('./sidebars/others');
const { sidebar: identitySidebar } = require('./sidebars/identity');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  timelineSidebar,

  // stocksSidebar,
  // economicsSidebar,
  // essaysSidebar,
  // mathSidebar,
  // musicSidebar,
  // entertainmentSidebar,
  // confuciusSidebar,
  // zenSidebar,
  // poemsSidebar,
  // fluidSidebar,
  othersSidebar,
  identitySidebar

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
