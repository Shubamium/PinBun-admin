import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'graphics',
  title: 'Graphics',
  type: 'document',
	fields: [
		defineField({
      name: 'name',
      title: 'Graphic Name',
      type: 'string',
			validation: (rule) => rule.required()
    }),
		
		defineField({
			name: 'image',
			title:'Graphic',
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
