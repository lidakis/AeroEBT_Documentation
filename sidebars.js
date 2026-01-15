/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
module.exports = {
  // Main documentation sidebar
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
      className: 'sidebar-item--with-icon sidebar-item--welcome',
    },
    {
      type: 'category',
      label: 'Aero EBT',
      collapsed: true,
      className: 'sidebar-item--with-icon sidebar-item--aero-ebt',
      items: [
        'aero-ebt/intro',
        {
          type: 'category',
          label: 'User Guides',
          collapsed: true,
          items: [
            'aero-ebt/user-guides/getting-started',
            'aero-ebt/user-guides/features',
            'aero-ebt/user-guides/user-guide',
          ],
        },
        {
          type: 'category',
          label: 'Technical Documentation',
          collapsed: true,
          items: [
            'aero-ebt/technical/technologies',
            {
              type: 'category',
              label: 'Implementation',
              collapsed: true,
              items: [
                'aero-ebt/technical/implementation/overview',
                'aero-ebt/technical/implementation/infrastructure',
              ],
            },
            {
              type: 'category',
              label: 'Integrations',
              collapsed: true,
              items: [
                'aero-ebt/technical/integrations',
                {
                  type: 'category',
                  label: 'Authentication',
                  collapsed: true,
                  items: [
                    'aero-ebt/technical/integrations/authentication/overview',
                    {
                      type: 'category',
                      label: 'Single Sign-On (SSO)',
                      collapsed: true,
                      items: [
                        'aero-ebt/technical/integrations/authentication/sso/azure-ad',
                        'aero-ebt/technical/integrations/authentication/sso/google-workspace',
                        'aero-ebt/technical/integrations/authentication/sso/okta',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'OAuth Providers',
                      collapsed: true,
                      items: [
                        'aero-ebt/technical/integrations/authentication/oauth/google',
                        'aero-ebt/technical/integrations/authentication/oauth/github',
                        'aero-ebt/technical/integrations/authentication/oauth/apple',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Data Exchange',
                  collapsed: true,
                  items: [
                    'aero-ebt/technical/integrations/data-exchange/overview',
                  ],
                },
                {
                  type: 'category',
                  label: 'Databases',
                  collapsed: true,
                  items: [
                    'aero-ebt/technical/integrations/databases/overview',
                  ],
                },
                {
                  type: 'category',
                  label: 'Airline Systems',
                  collapsed: true,
                  items: [
                    'aero-ebt/technical/integrations/airline-systems/overview',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'B2B Documentation',
          collapsed: true,
          items: [
            'aero-ebt/b2b/overview',
            'aero-ebt/b2b/setup',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'EBT Instructor',
      collapsed: true,
      className: 'sidebar-item--with-icon sidebar-item--ebt-instructor',
      items: [
        'ebt-instructor/intro',
        'ebt-instructor/roadmap',
        {
          type: 'category',
          label: 'Implementation Roadmaps',
          collapsed: true,
          items: [
            'ebt-instructor/roadmap-it-department',
            'ebt-instructor/roadmap-flight-standards',
            'ebt-instructor/roadmap-training',
            'ebt-instructor/roadmap-flight-ops',
            'ebt-instructor/roadmap-scheduling',
            'ebt-instructor/roadmap-safety',
          ],
        },
        {
          type: 'category',
          label: 'User Guides',
          collapsed: true,
          items: [
            'ebt-instructor/user-guides/getting-started',
            'ebt-instructor/user-guides/features',
            'ebt-instructor/user-guides/user-guide',
          ],
        },
        {
          type: 'category',
          label: 'Technical Documentation',
          collapsed: false,
          items: [
            'ebt-instructor/technical/technologies',
            {
              type: 'category',
              label: 'Implementation',
              collapsed: true,
              items: [
                'ebt-instructor/technical/implementation/overview',
                'ebt-instructor/technical/implementation/infrastructure',
                {
                  type: 'category',
                  label: 'Department Guides',
                  collapsed: true,
                  items: [
                    {
                      type: 'category',
                      label: 'IT Department',
                      collapsed: true,
                      items: [
                        'ebt-instructor/technical/implementation/it-department/architecture',
                        'ebt-instructor/technical/implementation/it-department/overview',
                        'ebt-instructor/technical/implementation/it-department/infrastructure',
                        'ebt-instructor/technical/implementation/it-department/azure-ad-integration',
                        'ebt-instructor/technical/implementation/it-department/integrations',
                        'ebt-instructor/technical/implementation/it-department/penetration-tests-report',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Flight Standards Department',
                      collapsed: true,
                      items: [
                        'ebt-instructor/technical/implementation/flight-standards/overview',
                        'ebt-instructor/technical/implementation/flight-standards/requirements',
                        'ebt-instructor/technical/implementation/flight-standards/integrations',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Training Department',
                      collapsed: true,
                      items: [
                        'ebt-instructor/technical/implementation/training/overview',
                        'ebt-instructor/technical/implementation/training/setup',
                        'ebt-instructor/technical/implementation/training/integrations',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Flight Ops Department',
                      collapsed: true,
                      items: [
                        'ebt-instructor/technical/implementation/flight-ops/overview',
                        'ebt-instructor/technical/implementation/flight-ops/operations',
                        'ebt-instructor/technical/implementation/flight-ops/integrations',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Scheduling Department',
                      collapsed: true,
                      items: [
                        'ebt-instructor/technical/implementation/scheduling/overview',
                        'ebt-instructor/technical/implementation/scheduling/setup',
                        'ebt-instructor/technical/implementation/scheduling/integrations',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Safety Department',
                      collapsed: false,
                      items: [
                        'ebt-instructor/technical/implementation/safety/overview',
                        'ebt-instructor/technical/implementation/safety/requirements',
                        'ebt-instructor/technical/implementation/safety/integrations',
                      ],
                    },
                  ],
                },
              ],
            },
            'ebt-instructor/technical/integrations',
          ],
        },
        {
          type: 'category',
          label: 'B2B Documentation',
          collapsed: true,
          items: [
            'ebt-instructor/b2b/overview',
            'ebt-instructor/b2b/setup',
          ],
        },
        {
          type: 'doc',
          id: 'ebt-instructor/privacy-policy',
          label: 'Privacy Policy',
          className: 'sidebar-item--with-icon sidebar-item--privacy',
        },
      ],
    },
    {
      type: 'category',
      label: 'EBT Scenario Builder',
      collapsed: true,
      className: 'sidebar-item--with-icon sidebar-item--ebt-scenario',
      items: [
        'ebt-scenario-builder/intro',
        {
          type: 'category',
          label: 'User Guides',
          collapsed: true,
          items: [
            'ebt-scenario-builder/user-guides/getting-started',
            'ebt-scenario-builder/user-guides/features',
            'ebt-scenario-builder/user-guides/user-guide',
          ],
        },
        {
          type: 'category',
          label: 'Technical Documentation',
          collapsed: true,
          items: [
            'ebt-scenario-builder/technical/technologies',
            {
              type: 'category',
              label: 'Implementation',
              collapsed: false,
              items: [
                'ebt-scenario-builder/technical/implementation/overview',
                'ebt-scenario-builder/technical/implementation/infrastructure',
              ],
            },
            'ebt-scenario-builder/technical/integrations',
          ],
        },
        {
          type: 'category',
          label: 'B2B Documentation',
          collapsed: false,
          items: [
            'ebt-scenario-builder/b2b/overview',
            'ebt-scenario-builder/b2b/setup',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Wingman',
      collapsed: false,
      className: 'sidebar-item--with-icon sidebar-item--wingman',
      items: [
        'wingman/intro',
        {
          type: 'category',
          label: 'User Guides',
          collapsed: false,
          items: [
            'wingman/user-guides/getting-started',
            'wingman/user-guides/features',
            'wingman/user-guides/user-guide',
          ],
        },
        {
          type: 'category',
          label: 'Technical Documentation',
          collapsed: false,
          items: [
            'wingman/technical/technologies',
            {
              type: 'category',
              label: 'Implementation',
              collapsed: false,
              items: [
                'wingman/technical/implementation/overview',
                'wingman/technical/implementation/infrastructure',
              ],
            },
            'wingman/technical/integrations',
          ],
        },
        {
          type: 'category',
          label: 'B2B Documentation',
          collapsed: false,
          items: [
            'wingman/b2b/overview',
            'wingman/b2b/setup',
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'terms-of-use',
      label: 'Terms of Use',
      className: 'sidebar-item--with-icon sidebar-item--terms',
    },
    {
      type: 'doc',
      id: 'disclaimer',
      label: 'Disclaimer',
      className: 'sidebar-item--with-icon sidebar-item--disclaimer',
    },
  ],
};
