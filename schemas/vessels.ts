import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vessels',
  title: 'Vessels',
  type: 'document',
	fields: [
		defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
			validation: (rule) => rule.required()
    }),
		defineField({
			name: 'half_body',
			title:'Half Body',
			type:'image',
		}),
		defineField({
			name: 'full_body',
			title:'Full Body',
			type:'image',
		}),
	
		defineField({
			name:'credits',
			type: 'array',
			of:[
				{
					type:'object',
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
				}
			]
		}),
	],

})
