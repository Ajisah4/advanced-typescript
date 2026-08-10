// Function Utility Types

// Example functions
function createUser(name: string, email: string, age: number) {
	return {
		id: crypto.randomUUID(),
		name,
		email,
		age,
		createdAt: new Date(),
	}
}

async function fetchUser(id: string): Promise<{ id: string; name: string }> {
	return { id, name: 'Alice' }
}

function processData(
	data: Array<string>,
	options: { limit: number },
): number {
	return Math.min(data.length, options.limit)
}

// createUser's return type
type NewUser = ReturnType<typeof createUser>

// createUser's parameter tuple
type CreateUserParams = Parameters<typeof createUser>

// fetchUser's resolved value
type FetchUserResult = Awaited<ReturnType<typeof fetchUser>>

// processData's parameter tuple
type ProcessDataArgs = Parameters<typeof processData>

// Same parameters and return type as createUser
function loggedCreateUser(
	...args: CreateUserParams
): NewUser {
	console.log(args)

	return createUser(...args)
}

export { loggedCreateUser }