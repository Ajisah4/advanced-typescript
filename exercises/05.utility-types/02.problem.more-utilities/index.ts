// Record, Readonly, Omit, Required, Exclude, Extract, NonNullable

type User = {
	id: string
	name: string
	email: string
	bio?: string
	website?: string
}

// Record of string keys to number values
type Config = Record<string, number>

// All User properties readonly
type ReadonlyUser = Readonly<User>

// User without id
type UserWithoutId = Omit<User, 'id'>

// Optional properties become required
type RequiredUser = Required<User>

// Union type utilities
type Status =
	| 'pending'
	| 'active'
	| 'inactive'
	| 'deleted'
	| null
	| undefined

// Remove deleted, null, and undefined
type ActiveStatus = Exclude<NonNullable<Status>, 'deleted'>

// Remove null and undefined
type ValidStatus = NonNullable<Status>

// Keep only string variants
type StringStatus = Extract<Status, string>

// Fixtures
const config: Config = {
	timeout: 5000,
	retries: 3,
}

const readonlyUser: ReadonlyUser = {
	id: '1',
	name: 'Alice',
	email: 'a@b.com',
}

const newUser: UserWithoutId = {
	name: 'Bob',
	email: 'b@b.com',
}

const fullUser: RequiredUser = {
	id: '1',
	name: 'Alice',
	email: 'a@b.com',
	bio: 'Hello!',
	website: 'https://alice.dev',
}

const status: ValidStatus = 'active'

const activeStatus: ActiveStatus = 'pending'

export {
	config,
	readonlyUser,
	newUser,
	fullUser,
	status,
	activeStatus,
}