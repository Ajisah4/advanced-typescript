// keyof and typeof Operators

type User = {
	id: string
	name: string
	email: string
	age: number
}

// Union of User keys
type UserKey = keyof User

function getUserProperty<K extends UserKey>(
	user: User,
	key: K,
): User[K] {
	return user[key]
}

// Using typeof with values
const config = {
	apiUrl: 'https://api.example.com',
	timeout: 5000,
	retries: 3,
}

// Type based on config object
type Config = typeof config

// Union of config keys
type ConfigKey = keyof Config

// Preserve literal types with as const
const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'] as const

// "GET" | "POST" | "PUT" | "DELETE"
type HttpMethod = (typeof httpMethods)[number]

function makeRequest(method: HttpMethod, url: string): string {
	return `${method} ${url}`
}

export { getUserProperty, makeRequest, config, httpMethods }