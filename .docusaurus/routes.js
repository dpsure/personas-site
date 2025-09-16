import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/personas-site/__docusaurus/debug',
    component: ComponentCreator('/personas-site/__docusaurus/debug', '89e'),
    exact: true
  },
  {
    path: '/personas-site/__docusaurus/debug/config',
    component: ComponentCreator('/personas-site/__docusaurus/debug/config', 'db5'),
    exact: true
  },
  {
    path: '/personas-site/__docusaurus/debug/content',
    component: ComponentCreator('/personas-site/__docusaurus/debug/content', '1d9'),
    exact: true
  },
  {
    path: '/personas-site/__docusaurus/debug/globalData',
    component: ComponentCreator('/personas-site/__docusaurus/debug/globalData', 'dbb'),
    exact: true
  },
  {
    path: '/personas-site/__docusaurus/debug/metadata',
    component: ComponentCreator('/personas-site/__docusaurus/debug/metadata', 'de7'),
    exact: true
  },
  {
    path: '/personas-site/__docusaurus/debug/registry',
    component: ComponentCreator('/personas-site/__docusaurus/debug/registry', 'af7'),
    exact: true
  },
  {
    path: '/personas-site/__docusaurus/debug/routes',
    component: ComponentCreator('/personas-site/__docusaurus/debug/routes', '2ed'),
    exact: true
  },
  {
    path: '/personas-site/',
    component: ComponentCreator('/personas-site/', 'ff2'),
    routes: [
      {
        path: '/personas-site/',
        component: ComponentCreator('/personas-site/', '7bc'),
        routes: [
          {
            path: '/personas-site/',
            component: ComponentCreator('/personas-site/', '945'),
            routes: [
              {
                path: '/personas-site/jobs/cloud-architect-migration-tco',
                component: ComponentCreator('/personas-site/jobs/cloud-architect-migration-tco', '9c9'),
                exact: true,
                sidebar: "personas"
              },
              {
                path: '/personas-site/jobs/developer-agents',
                component: ComponentCreator('/personas-site/jobs/developer-agents', 'c12'),
                exact: true,
                sidebar: "personas"
              },
              {
                path: '/personas-site/personas/ai-engineer',
                component: ComponentCreator('/personas-site/personas/ai-engineer', 'd93'),
                exact: true,
                sidebar: "personas"
              },
              {
                path: '/personas-site/personas/cloud-architect',
                component: ComponentCreator('/personas-site/personas/cloud-architect', '046'),
                exact: true,
                sidebar: "personas"
              },
              {
                path: '/personas-site/personas/it-decision-maker',
                component: ComponentCreator('/personas-site/personas/it-decision-maker', '338'),
                exact: true,
                sidebar: "personas"
              },
              {
                path: '/personas-site/personas/landing',
                component: ComponentCreator('/personas-site/personas/landing', '28e'),
                exact: true,
                sidebar: "personas"
              },
              {
                path: '/personas-site/personas/platform-engineer',
                component: ComponentCreator('/personas-site/personas/platform-engineer', 'e6e'),
                exact: true,
                sidebar: "personas"
              },
              {
                path: '/personas-site/',
                component: ComponentCreator('/personas-site/', '1f7'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
