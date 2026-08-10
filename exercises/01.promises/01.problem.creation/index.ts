// Creating Promises

type User = {
	id: string
	name: string
	email: string
}

function fetchUser(): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: '1',
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 100)
	})
}

// Optional: call fetchUser and log the result
fetchUser().then((user) => {
	console.log(user)
})

export { fetchUser }