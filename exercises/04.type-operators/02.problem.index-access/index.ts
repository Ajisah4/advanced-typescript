// Index Access Types

type ApiResponse = {
	data: {
		user: {
			id: string
			name: string
			profile: {
				avatar: string
				bio: string
			}
		}
		posts: Array<{
			id: string
			title: string
			published: boolean
		}>
	}
	status: number
	error: string | null
}

// 🐨 Extract the type of `data`
// 🐨 Extract the type of `user` from data
// 🐨 Extract the type of `profile` from user
// 🐨 Extract the type of a single post
// 🐨 Extract a type that covers both the `status` and `error` property types
// 🐨 Create a type that is all possible value types of the user type

// 🐨 Create fixtures using your extracted types, then export them:
// profile → { avatar: 'https://example.com/avatar.jpg', bio: 'Hello!' }
// post → { id: '1', title: 'Hello World', published: true }
// user → { id: '1', name: 'Alice', profile: { avatar: 'url', bio: 'bio' } }

// export { profile, post, user }
