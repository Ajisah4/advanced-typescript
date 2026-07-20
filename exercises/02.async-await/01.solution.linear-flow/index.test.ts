import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('loadUserData is exported', () => {
	assert.ok(
		'loadUserData' in solution,
		'🚨 Make sure you export "loadUserData"',
	)
})

await test(
	'fetchUser resolves to a User object',
	{ timeout: 5000 },
	async () => {
		const result = await solution.loadUserData()
		const { user } = result

		assert.ok(
			'id' in user,
			'🚨 user should have an id property - make sure you await the async function',
		)
		assert.ok(
			'name' in user,
			'🚨 user should have a name property - make sure you await the async function',
		)
		assert.ok(
			'email' in user,
			'🚨 user should have an email property - make sure you await the async function',
		)
		assert.strictEqual(
			user.id,
			'1',
			'🚨 user.id should be "1" - check your async function return value',
		)
		assert.strictEqual(
			user.name,
			'Alice',
			'🚨 user.name should be "Alice" - check your async function return value',
		)
		assert.strictEqual(
			user.email,
			'alice@example.com',
			'🚨 user.email should be "alice@example.com" - check your async function return value',
		)
	},
)

await test(
	'fetchOrders resolves to an array of Order objects',
	{ timeout: 5000 },
	async () => {
		const result = await solution.loadUserData()
		const { orders } = result

		assert.strictEqual(
			Array.isArray(orders),
			true,
			'🚨 orders should be an array - make sure you await the async function',
		)
		assert.ok(
			orders.length > 0,
			'🚨 orders should have at least one item - check your async function return value',
		)
		assert.ok(
			'id' in orders[0],
			'🚨 orders[0] should have an id property - check your async function return value',
		)
		assert.ok(
			'userId' in orders[0],
			'🚨 orders[0] should have a userId property - check your async function return value',
		)
		assert.ok(
			'items' in orders[0],
			'🚨 orders[0] should have an items property - check your async function return value',
		)
		assert.ok(
			'total' in orders[0],
			'🚨 orders[0] should have a total property - check your async function return value',
		)
	},
)

await test(
	'loadUserData function loads user and orders sequentially',
	{ timeout: 5000 },
	async () => {
		const result = await solution.loadUserData()
		const { user, orders } = result

		assert.strictEqual(
			user.id,
			'1',
			'🚨 result.user.id should be "1" - return both user and orders from loadUserData',
		)
		assert.strictEqual(
			orders[0].userId,
			user.id,
			'🚨 result.orders[0].userId should match result.user.id - fetch orders with the user id',
		)
	},
)
