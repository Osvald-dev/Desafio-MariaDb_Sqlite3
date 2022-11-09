
import { baseDeDatos } from './connection/index.js';
baseDeDatos.from('products').where('id', '23').update({ stock: 0 })
	.then((cant) => console.log('Car updated: ',cant))
	.catch(err => { console.log(err); throw err })
	.finally(() => baseDeDatos.destroy())