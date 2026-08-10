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

// Explicit Promise<User> return type
async function fetchUser(): Promise<User> {
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

// Explicit Promise<Array<Product>> return type
async function fetchProducts(): Promise<Array<Product>> {
	return new Promise<Array<Product>>((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 'p1', name: 'Laptop', price: 999.99 },
				{ id: 'p2', name: 'Mouse', price: 29.99 },
			])
		}, 500)
	})
}

// Return both user and products
async function loadData(): Promise<{
	user: User
	products: Array<Product>
}> {
	const user = await fetchUser()
	const products = await fetchProducts()

	return { user, products }
}

export { fetchUser, fetchProducts, loadData }

void loadData()