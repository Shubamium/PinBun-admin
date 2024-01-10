import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fanart',
  title: 'Fan Art',
  type: 'document',
	fields: [
		defineField({
      name: 'name',
      title: 'Art Name',
      type: 'string',
			validation: (rule) => rule.required()
    }),
		
		defineField({
			name: 'image',
			title:'Art',
			type:'image',
		}),
	
		defineField({
			name:'credit',
			type: 'object',
			fields:[
				{
					name: 'name',
					title: 'Name',
					type:'string',
				},
				{
					name: 'link',
					title: 'Link',
					type:'string',
				}
			]
		}),
	],

})
