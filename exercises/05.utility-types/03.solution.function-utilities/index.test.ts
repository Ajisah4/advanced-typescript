import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('loggedCreateUser is exported', () => {
	assert.ok(
		'loggedCreateUser' in solution,
		'🚨 Make sure you export "loggedCreateUser"',
	)
})

await test('ReturnType extracts return type from function', () => {
	const user = solution.loggedCreateUser('Alice', 'alice@example.com', 30)
	assert.ok('id' in user, '🚨 user should have an id property')
	assert.ok('name' in user, '🚨 user should have a name property')
	assert.ok('email' in user, '🚨 user should have an email property')
	assert.ok('age' in user, '🚨 user should have an age property')
	assert.ok('createdAt' in user, '🚨 user should have a createdAt property')
	assert.strictEqual(user.name, 'Alice', '🚨 user.name should be "Alice"')
})

await test('Parameters extracts parameter types from function', () => {
	const user = solution.loggedCreateUser('Alice', 'alice@example.com', 30)
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 loggedCreateUser should accept name as the first argument',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 loggedCreateUser should accept email as the second argument',
	)
	assert.strictEqual(
		user.age,
		30,
		'🚨 loggedCreateUser should accept age as the third argument',
	)
})
