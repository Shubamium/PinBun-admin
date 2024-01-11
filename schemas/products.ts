import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
	fields: [
		defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
		defineField({
			name: 'description',
			title:'Product Description',
			type:'array',
			of:[{type:'block'}]
		}),
		defineField({
			name: 'image',
			title:'Product Image',
			type:'image',
		}),
		defineField({
			name:'price',
			title:'Product Price',
			type:'string'
		}),
		defineField({
			name: 'store_url',
			title:'Store URL',
			description:'bigcartel product page or product detail url',
			type:'url',
		}),
		
	
	
	],

})
