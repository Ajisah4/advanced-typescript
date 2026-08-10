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

// Extract the type of data
type Data = ApiResponse['data']

// Extract the user type
type User = Data['user']

// Extract the profile type
type Profile = User['profile']

// Extract a single post type
type Post = Data['posts'][number]

// Covers both status and error property types
type StatusOrError = ApiResponse['status' | 'error']

// All possible value types of User
type UserValue = User[keyof User]

// Fixtures
const profile: Profile = {
	avatar: 'https://example.com/avatar.jpg',
	bio: 'Hello!',
}

const post: Post = {
	id: '1',
	title: 'Hello World',
	published: true,
}

const user: User = {
	id: '1',
	name: 'Alice',
	profile: {
		avatar: 'url',
		bio: 'bio',
	},
}

export { profile, post, user }