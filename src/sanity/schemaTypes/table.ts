import {defineType, defineField} from 'sanity'

export const tableType = defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'row',
          fields: [
            {
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
  ],
})
