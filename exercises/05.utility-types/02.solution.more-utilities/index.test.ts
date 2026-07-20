import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('config, readonlyUser, newUser, fullUser, status, and activeStatus are exported', () => {
	assert.ok('config' in solution, '🚨 Make sure you export "config"')
	assert.ok(
		'readonlyUser' in solution,
		'🚨 Make sure you export "readonlyUser"',
	)
	assert.ok('newUser' in solution, '🚨 Make sure you export "newUser"')
	assert.ok('fullUser' in solution, '🚨 Make sure you export "fullUser"')
	assert.ok('status' in solution, '🚨 Make sure you export "status"')
	assert.ok(
		'activeStatus' in solution,
		'🚨 Make sure you export "activeStatus"',
	)
})

await test('Record type creates object with string keys', () => {
	assert.strictEqual(
		solution.config.timeout,
		5000,
		'🚨 config.timeout should be 5000',
	)
	assert.strictEqual(
		solution.config.retries,
		3,
		'🚨 config.retries should be 3',
	)
})

await test('Readonly type makes properties readonly', () => {
	assert.strictEqual(
		solution.readonlyUser.name,
		'Alice',
		'🚨 readonlyUser.name should be "Alice"',
	)
})

await test('Omit type removes specified properties', () => {
	assert.strictEqual(
		solution.newUser.name,
		'Bob',
		'🚨 newUser.name should be "Bob"',
	)
	assert.strictEqual(
		solution.newUser.email,
		'b@b.com',
		'🚨 newUser.email should be "b@b.com"',
	)
})

await test('Required type makes optional properties required', () => {
	assert.strictEqual(
		solution.fullUser.bio,
		'Hello!',
		'🚨 fullUser.bio should be "Hello!"',
	)
	assert.strictEqual(
		solution.fullUser.website,
		'https://alice.dev',
		'🚨 fullUser.website should be "https://alice.dev"',
	)
})

await test('NonNullable removes null and undefined from union types', () => {
	assert.strictEqual(solution.status, 'active', '🚨 status should be "active"')
})

await test('Exclude removes specific types from union', () => {
	assert.strictEqual(
		solution.activeStatus,
		'pending',
		'🚨 activeStatus should be "pending"',
	)
})
