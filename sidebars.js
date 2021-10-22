/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  docs: [
    'Home',
    {
      HC: ['hc/html', 'hc/css', 'hc/scss'],
      JS: [
        'js/basic',
        'js/advanced',
        'js/object',
        'js/async',
        'js/dataStructure',
        'js/module',
        'js/reg',
        'js/request',
        'js/hand',
      ],
      Extension: [
        'extension/web-api',
        'extension/browser',
        'extension/network',
      ],
      TS: ['ts/basic'],
      React: ['react/basic', 'react/redux', 'react/router', 'react/hooks'],
      ReactCore: [
        'reactCore/basic',
        'reactCore/ds',
        'reactCore/createUpdate',
        'reactCore/render',
        'reactCore/commit',
        'reactCore/scheduler',
        'reactCore/reconciler',
        'reactCore/event',
      ],
      Dev: ['dev/basic', 'dev/git', 'dev/node', 'dev/os', 'dev/webpack'],
      Algo: [
        'ds/basic',
        'ds/sort',
        'ds/stack',
        'ds/sword',
        'ds/dp',
        'ds/linkedList',
        'ds/tree',
      ],
      Interview: ['interview/hand', 'interview/scene', 'interview/quize'],
      Vue: ['vue/basic'],
      // TODO:  Fe  todo  downloads
      // FIXME:
      // FEAT:
    },
  ],
};
