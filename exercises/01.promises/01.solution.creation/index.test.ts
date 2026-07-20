import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('fetchUser is exported', () => {
	assert.ok('fetchUser' in solution, '🚨 Make sure you export "fetchUser"')
})

await test(
	'fetchUser returns a Promise that resolves to a User object',
	{ timeout: 5000 },
	async () => {
		type User = {
			id: string
			name: string
			email: string
		}

		const user = await solution.fetchUser()

		assert.ok(
			'id' in user,
			'🚨 user should have an id property - check your Promise resolve value',
		)
		assert.ok(
			'name' in user,
			'🚨 user should have a name property - check your Promise resolve value',
		)
		assert.ok(
			'email' in user,
			'🚨 user should have an email property - check your Promise resolve value',
		)
		assert.strictEqual(
			user.id,
			'1',
			'🚨 user.id should be "1" - check your Promise resolve value',
		)
		assert.strictEqual(
			user.name,
			'Alice',
			'🚨 user.name should be "Alice" - check your Promise resolve value',
		)
		assert.strictEqual(
			user.email,
			'alice@example.com',
			'🚨 user.email should be "alice@example.com" - check your Promise resolve value',
		)
	},
)
