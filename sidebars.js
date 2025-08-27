/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  personas: [
    {
      type: 'category',
      label: 'Personas',
      link: { type: 'doc', id: 'personas/landing' },
      items: [
        'personas/cloud-architect',
        'personas/platform-engineer',
        'personas/ai-engineer',
        'personas/it-decision-maker',
        'jobs/developer-agents',
        'jobs/cloud-architect-migration-tco',
      ],
    },
  ],
};
module.exports = sidebars;
