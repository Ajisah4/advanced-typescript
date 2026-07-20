// Type-Only Imports

type User = {
	id: string
	name: string
	email: string
}

type Product = {
	id: string
	name: string
	price: number
}

// 🐨 Move User and Product into types.ts, export them there,
//    then bring them back with a type-only import (no runtime values)

function displayUser(user: User) {
	console.log(`User: ${user.name} (${user.email})`)
}

function displayProduct(product: Product) {
	console.log(`Product: ${product.name} - $${product.price}`)
}

const user: User = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
}

const product: Product = {
	id: 'p1',
	name: 'Laptop',
	price: 999.99,
}

displayUser(user)
displayProduct(product)

// 🐨 Export displayUser and displayProduct so we can verify your work
// export { displayUser, displayProduct }
