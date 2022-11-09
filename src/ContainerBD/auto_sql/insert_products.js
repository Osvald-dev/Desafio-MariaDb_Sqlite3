import { baseDeDatos } from './connection/index.js'


baseDeDatos('products').insert(products)
	.then(PrimerID => console.log('primer id: ',PrimerID,' ultimo id: ', PrimerID+products.length ) )
	.catch(err => { console.log(err); })
	.finally(() => baseDeDatos.destroy()) 