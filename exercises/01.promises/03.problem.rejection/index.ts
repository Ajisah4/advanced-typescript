// Handling Rejections

type User = {
	id: string
	name: string
	email: string
}

type UserProfile =
	| { status: 'success'; user: User }
	| { status: 'error'; message: string }

function fetchUser(id: string): Promise<User> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id !== '1') {
				reject(new Error('User not found'))
				return
			}

			resolve({
				id: '1',
				name: 'Alice',
				email: 'alice@example.com',
			})
		}, 1000)
	})
}

function getUserProfile(id: string): Promise<UserProfile> {
	return fetchUser(id).then((user) => ({ status: 'success', user }) as const)
}

// 🐨 Update getUserProfile to handle rejections with .catch()
//    On rejection, return { status: 'error', message }
//    💰 Prefer error.message when the rejection is an Error; otherwise
//       use 'Unknown error'

// 🐨 Export fetchUser and getUserProfile so we can verify your work
// export { fetchUser, getUserProfile }
