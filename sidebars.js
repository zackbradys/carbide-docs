/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  carbideSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Carbide Image Registry',
      collapsed: false,
      items: [
        'registry-docs/introduction',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'registry-docs/prereqs',
            {
              type: 'category',
              label: 'Connected Environments',
              items: [
                // 'registry-docs/pulling-images',
                'registry-docs/validating-images',
                'registry-docs/copying-images',
              ],
            },
            {
              type: 'category',
              label: 'Deploying Into Airgaps',
              items: [
                'registry-docs/downloading-images',
                'registry-docs/validating-airgap-images',
                'registry-docs/loading-images',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'registry-docs/kubernetes-config',
            'registry-docs/rancher-config'
          ],
        },
        'registry-docs/enforcement',
        {
          type: 'category',
          label: 'Uninstall',
          items: [
            'registry-docs/uninstall-kubernetes',
            'registry-docs/uninstall-rancher',
          ],
        },
        'registry-docs/architecture',
      ],
    },
    {
      type: 'category',
      label: 'STIGATRON',
      collapsed: false,
      items: [
        'stigatron-docs/introduction',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'stigatron-docs/prereqs',
            'stigatron-docs/getting-started',
            'stigatron-docs/installation',
          ],
        },
        {
          type: 'category',
          label: 'Using STIGATRON',
          items: [
            'stigatron-docs/create-scan',
            'stigatron-docs/using-heimdall',
          ],
        },
        'stigatron-docs/uninstall',   
      ],
    },
    'registry-docs/feedback'
  ],

};

module.exports = sidebars;
