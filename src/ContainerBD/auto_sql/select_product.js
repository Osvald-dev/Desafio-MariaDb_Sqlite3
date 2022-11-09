import { baseDeDatos } from './connection/index.js';

baseDeDatos.from('products').select('*')
	.then(rows => {
		// rows.forEach(row => {
		// 	console.log(`${row['id']} ${row['name']} ${row['price']} ${row['stock']}`);
		// });
		for (row of rows) {
			console.log(`${row['id']} ${row['tile']} ${row['price']} ${row['thumbnail']}`);
		}
	})
	.catch(err => console.log(err))
	.finally(() => baseDeDatos.destroy())