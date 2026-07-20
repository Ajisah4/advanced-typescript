import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('fetchUser is exported', () => {
	assert.ok('fetchUser' in solution, '🚨 Make sure you export "fetchUser"')
})

await test('fetchUser returns correct result', async () => {
	const result = await solution.fetchUser()
	assert.ok('id' in result, '🚨 result should have an id property')
	assert.ok('name' in result, '🚨 result should have a name property')
	assert.strictEqual(result.id, '1', '🚨 result.id should be "1"')
	assert.strictEqual(result.name, 'Alice', '🚨 result.name should be "Alice"')
})
