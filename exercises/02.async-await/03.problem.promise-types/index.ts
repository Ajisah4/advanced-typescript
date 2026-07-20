// Promise Types

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

// 🐨 Add explicit Promise return types:
// 🦺 async function fetchUser(): Promise<User> { ... }
// 🦺 async function fetchProducts(): Promise<Array<Product>> { ... }

async function fetchUser() {
	return new Promise<User>((resolve) => {
		setTimeout(() => {
			resolve({
				id: '1',
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 1000)
	})
}

async function fetchProducts() {
	return new Promise<Array<Product>>((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 'p1', name: 'Laptop', price: 999.99 },
				{ id: 'p2', name: 'Mouse', price: 29.99 },
			])
		}, 500)
	})
}

// 🐨 Make loadData return { user, products } after awaiting both helpers
async function loadData() {
	const user = await fetchUser()
	const products = await fetchProducts()

	// console.log('User:', user)
	// console.log('Products:', products)
}

// 🐨 Export fetchUser, fetchProducts, and loadData
// export { fetchUser, fetchProducts, loadData }

void loadData()
