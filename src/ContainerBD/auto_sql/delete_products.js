

import { baseDeDatos } from './connection/index.js'

baseDeDatos.from('products').del()
	.then(() => console.log('All PRODUCTS deleted'))
	.catch(err => { console.log(err); throw err })
	.finally(() => baseDeDatos.destroy())