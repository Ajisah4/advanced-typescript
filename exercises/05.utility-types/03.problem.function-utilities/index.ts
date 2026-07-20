// Function Utility Types

// Example functions
function createUser(name: string, email: string, age: number) {
	return { id: crypto.randomUUID(), name, email, age, createdAt: new Date() }
}

async function fetchUser(id: string): Promise<{ id: string; name: string }> {
	return { id, name: 'Alice' }
}

function processData(data: Array<string>, options: { limit: number }): number {
	return Math.min(data.length, options.limit)
}

// 🐨 Create NewUser from createUser's return type
// 🐨 Create CreateUserParams from createUser's parameter tuple
// 🐨 Create FetchUserResult for fetchUser's resolved value
// 🐨 Create ProcessDataArgs from processData's parameter tuple

// 🐨 Create loggedCreateUser:
//    - same parameters and return type as createUser
//    - logs the args, then delegates to createUser

// 🐨 Export loggedCreateUser so we can verify your work
// export { loggedCreateUser }
