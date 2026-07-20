// Chaining Promises

type User = {
	id: string
	name: string
	email: string
}

type Order = {
	id: string
	userId: string
	items: Array<string>
	total: number
}

function fetchUser(): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: '1',
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 1000)
	})
}

function fetchOrders(userId: string): Promise<Array<Order>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: 'o1',
					userId,
					items: ['Laptop', 'Mouse'],
					total: 1299.99,
				},
			])
		}, 500)
	})
}

// 🐨 Create fetchUserAndOrders() that:
//    1. Calls fetchUser()
//    2. Passes user.id into fetchOrders(userId)
//    3. Returns Promise<{ user: User; orders: Array<Order> }>

// 🐨 verify your work with:
// fetchUserAndOrders().then(({ user, orders }) => {
// 	console.log(user)
// 	console.log(orders)
// })

// 🐨 Export fetchUserAndOrders so we can verify your work
// export { fetchUserAndOrders }
