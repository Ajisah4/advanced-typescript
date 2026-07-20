// Import and Export

function displayUser(user: { name: string; email: string }) {
	console.log(`User: ${user.name} (${user.email})`)
}

function displayProduct(product: { name: string; price: number }) {
	console.log(`Product: ${product.name} - $${product.price}`)
}

const user = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
}

const product = {
	id: 'p1',
	name: 'Laptop',
	price: 999.99,
}

// 🐨 Move `user` and `product` into data.ts, export them there,
//    then import { user, product } from './data.ts' here

displayUser(user)
displayProduct(product)

// 🐨 Export displayUser and displayProduct so we can verify your work
// export { displayUser, displayProduct }
