// Error Handling with Async/Await

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

function fetchUser(userId: string): Promise<User> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (userId === '1') {
				resolve({
					id: '1',
					name: 'Alice',
					email: 'alice@example.com',
				})
			} else {
				reject(new Error('Failed to fetch user'))
			}
		}, 100)
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
		}, 50)
	})
}

async function loadUserData(userId: string) {
	// 🐨 Wrap the awaits in try/catch (and optionally finally)
	//    Catch errors internally — do not rethrow
	//    fetchUser('1') succeeds; other ids reject

	const user = await fetchUser(userId)
	// console.log('User:', user)

	const orders = await fetchOrders(user.id)
	// console.log('Orders:', orders)
}

void loadUserData('1')

// 🐨 Export loadUserData so we can verify your work
// export { loadUserData }
