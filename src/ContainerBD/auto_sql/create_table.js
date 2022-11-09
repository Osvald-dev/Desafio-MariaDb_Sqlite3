import { baseDeDatos } from './connection/index.js'
baseDeDatos.schema.createTable('products', table => {
	table.increments('id')
	table.string('title')
	table.integer('price')
	table.string('thumbnail')
})
.then(() => console.log('Table created'))
.catch(err => { console.log(err); })
.finally(() => baseDeDatos.destroy())