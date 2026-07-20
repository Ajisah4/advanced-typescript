import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('partial, nullable, and mutable are exported', () => {
	assert.ok('partial' in solution, '🚨 Make sure you export "partial"')
	assert.ok('nullable' in solution, '🚨 Make sure you export "nullable"')
	assert.ok('mutable' in solution, '🚨 Make sure you export "mutable"')
})

await test('MyPartial makes all properties optional', () => {
	assert.strictEqual(
		solution.partial.name,
		'Alice',
		'🚨 partial.name should be "Alice"',
	)
})

await test('Nullable makes all properties nullable', () => {
	assert.strictEqual(
		solution.nullable.id,
		null,
		'🚨 nullable.id should be null',
	)
	assert.strictEqual(
		solution.nullable.name,
		'Bob',
		'🚨 nullable.name should be "Bob"',
	)
	assert.strictEqual(
		solution.nullable.email,
		null,
		'🚨 nullable.email should be null',
	)
})

await test('Mutable removes readonly modifier', () => {
	solution.mutable.name = 'Updated'
	assert.strictEqual(
		solution.mutable.name,
		'Updated',
		'🚨 mutable.name should be assignable and equal "Updated"',
	)
})
