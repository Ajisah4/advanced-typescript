import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('fetchUser, fetchProducts, and loadData are exported', () => {
	assert.ok('fetchUser' in solution, '🚨 Make sure you export "fetchUser"')
	assert.ok(
		'fetchProducts' in solution,
		'🚨 Make sure you export "fetchProducts"',
	)
	assert.ok('loadData' in solution, '🚨 Make sure you export "loadData"')
})

await test(
	'fetchUser returns a Promise that resolves to a User',
	{ timeout: 5000 },
	async () => {
		const user = await solution.fetchUser()

		assert.ok('id' in user, '🚨 user should have an id property')
		assert.ok('name' in user, '🚨 user should have a name property')
		assert.ok('email' in user, '🚨 user should have an email property')
		assert.strictEqual(user.id, '1', '🚨 user.id should be "1"')
		assert.strictEqual(user.name, 'Alice', '🚨 user.name should be "Alice"')
		assert.strictEqual(
			user.email,
			'alice@example.com',
			'🚨 user.email should be "alice@example.com"',
		)
	},
)

await test(
	'fetchProducts returns a Promise that resolves to an array of Products',
	{ timeout: 5000 },
	async () => {
		const products = await solution.fetchProducts()

		assert.strictEqual(
			Array.isArray(products),
			true,
			'🚨 products should be an array',
		)
		assert.ok(products.length > 0, '🚨 products should have at least one item')
		assert.ok('id' in products[0], '🚨 products[0] should have an id property')
		assert.ok(
			'name' in products[0],
			'🚨 products[0] should have a name property',
		)
		assert.ok(
			'price' in products[0],
			'🚨 products[0] should have a price property',
		)
	},
)

await test(
	'loadData function loads both user and products',
	{ timeout: 5000 },
	async () => {
		const result = await solution.loadData()
		const { user, products } = result

		assert.strictEqual(
			user.id,
			'1',
			'🚨 result.user.id should be "1" - loadData should return { user, products }',
		)
		assert.ok(
			products.length > 0,
			'🚨 result.products should have items - loadData should return { user, products }',
		)
	},
)
