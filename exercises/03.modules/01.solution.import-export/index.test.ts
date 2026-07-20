import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('displayUser and displayProduct are exported', () => {
	assert.ok('displayUser' in solution, '🚨 Make sure you export "displayUser"')
	assert.ok(
		'displayProduct' in solution,
		'🚨 Make sure you export "displayProduct"',
	)
})

await test('displayUser function displays user information', () => {
	const user = { id: '1', name: 'Test User', email: 'test@example.com' }
	const result = solution.displayUser(user)
	assert.strictEqual(
		result,
		undefined,
		'🚨 displayUser should be callable with a user object',
	)
})

await test('displayProduct function displays product information', () => {
	const product = { id: 'p1', name: 'Test Product', price: 99.99 }
	const result = solution.displayProduct(product)
	assert.strictEqual(
		result,
		undefined,
		'🚨 displayProduct should be callable with a product object',
	)
})
