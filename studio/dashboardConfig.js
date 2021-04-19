export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '607d833f96b0b04e2ecabc66',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gyffnufy',
                  apiId: 'aefa978b-4b72-4c6f-b48d-0f68012bd2ad'
                },
                {
                  buildHookId: '607d833fbd520157474dd377',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cb1h3wkx',
                  apiId: 'a888098a-f29f-4a01-874c-f59a7c7dc7f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/orjellingsen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cb1h3wkx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
