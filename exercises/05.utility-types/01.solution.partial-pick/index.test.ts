import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('updateUser is exported', () => {
	assert.ok('updateUser' in solution, '🚨 Make sure you export "updateUser"')
})

await test('updateUser function updates user with partial data', () => {
	type User = {
		id: string
		name: string
		email: string
		role: 'admin' | 'user'
		createdAt: Date
	}

	const user: User = {
		id: '1',
		name: 'Alice',
		email: 'alice@example.com',
		role: 'user',
		createdAt: new Date(),
	}

	const updated1 = solution.updateUser(user, { name: 'Alice Smith' })
	assert.strictEqual(
		updated1.name,
		'Alice Smith',
		'🚨 updated1.name should be "Alice Smith"',
	)
	assert.strictEqual(
		updated1.email,
		'alice@example.com',
		'🚨 updated1.email should remain "alice@example.com" when only name is updated',
	)
	assert.strictEqual(updated1.id, '1', '🚨 updated1.id should remain "1"')

	const updated2 = solution.updateUser(user, {
		email: 'alice.smith@example.com',
	})
	assert.strictEqual(
		updated2.email,
		'alice.smith@example.com',
		'🚨 updated2.email should be "alice.smith@example.com"',
	)
	assert.strictEqual(
		updated2.name,
		'Alice',
		'🚨 updated2.name should remain "Alice" when only email is updated',
	)

	const updated3 = solution.updateUser(user, {
		name: 'Alice Smith',
		email: 'alice.smith@example.com',
	})
	assert.strictEqual(
		updated3.name,
		'Alice Smith',
		'🚨 updated3.name should be "Alice Smith" when both fields are updated',
	)
	assert.strictEqual(
		updated3.email,
		'alice.smith@example.com',
		'🚨 updated3.email should be "alice.smith@example.com" when both fields are updated',
	)
})
