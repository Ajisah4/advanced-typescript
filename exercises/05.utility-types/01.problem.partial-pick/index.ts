// Partial and Pick

type User = {
	id: string
	name: string
	email: string
	role: 'admin' | 'user'
	createdAt: Date
}

// All User properties are optional
type PartialUser = Partial<User>

// Only name and email
type UserNameEmail = Pick<User, 'name' | 'email'>

// Optional updates for name and/or email only
type UserUpdate = Partial<Pick<User, 'name' | 'email'>>

function updateUser(user: User, updates: UserUpdate) {
	return { ...user, ...updates }
}

const user: User = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
	role: 'user',
	createdAt: new Date(),
}

// Updating name
const updated1 = updateUser(user, {
	name: 'Alice Smith',
})

// Updating email
const updated2 = updateUser(user, {
	email: 'alice.smith@example.com',
})

// Updating both
const updated3 = updateUser(user, {
	name: 'Alice Smith',
	email: 'alice.smith@example.com',
})

// ❌ This should NOT work
// const updated4 = updateUser(user, { id: '2' })

export { updateUser }