import { baseDeDatos } from './connection/index.js'

baseDeDatos.from('products').where('id',22).del()
	.then((val) => console.log('Products deleted: ',val))
	.catch(err => { console.log(err);  })
	.finally(() => baseDeDatos.destroy())