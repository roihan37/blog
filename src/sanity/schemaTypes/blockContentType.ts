import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
       
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),

    defineArrayMember({
      type: 'code',
      options: {
        theme: 'github',
        language: 'go',
        languageAlternatives: [
          {title: 'Go', value: 'go'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'Python', value: 'python'},
          {title: 'Bash', value: 'bash'},
        ],
      }
    }),
    defineArrayMember({ type: 'table' }),
    defineArrayMember({
      type: 'object',
      name: 'horizontalRule',
      title: 'Divider',
      fields: [
        {
          name: 'dummy',
          type: 'string',
          title: 'Dummy Field',
          hidden: true,  // supaya gak muncul di editor
          readOnly: true,
          initialValue: 'divider',
        }
      ],
      preview: {
        prepare() {
          return { title: 'Divider' }
        }
      }
    }),
    
  ],
})
