export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5449f14fa0b9cfa4380db8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fcqoohtk',
                  apiId: '0b07f351-993e-49d2-97d9-98c99dea6b70'
                },
                {
                  buildHookId: '5e5449f18ac799fabf2c94a5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ukmktsur',
                  apiId: 'f8aa76b0-7c27-4faa-9cb2-b5aa86e11aba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maszhin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ukmktsur.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
