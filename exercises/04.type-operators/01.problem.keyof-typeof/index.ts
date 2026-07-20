// keyof and typeof Operators

type User = {
	id: string
	name: string
	email: string
	age: number
}

// 🐨 Create a type `UserKey` that is the union of User's keys

// 🐨 Create `getUserProperty(user, key)`:
//    - key is constrained to UserKey
//    - returns the value at that key with the matching value type

// Using typeof with values
const config = {
	apiUrl: 'https://api.example.com',
	timeout: 5000,
	retries: 3,
}

// 🐨 Create a type `Config` based on the config object
// 🐨 Create a type `ConfigKey` from Config's keys

// Using as const for literal types
// 🐨 Preserve literal types for the httpMethods array
const httpMethods = ['GET', 'POST', 'PUT', 'DELETE']

// 🐨 Create a type `HttpMethod` from the array elements
//    (a union of those literal method names, not plain string)

// 🐨 Create `makeRequest(method, url)` that returns e.g. "GET /api/users"
//    method should be constrained to HttpMethod

// 🐨 Export getUserProperty, makeRequest, config, and httpMethods
// export { getUserProperty, makeRequest, config, httpMethods }
