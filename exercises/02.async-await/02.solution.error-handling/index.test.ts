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
	'loadUserData handles successful fetch',
	{ timeout: 5000 },
	async () => {
		await solution.loadUserData('1')
	},
)

await test(
	'loadUserData handles errors with try-catch',
	{ timeout: 5000 },
	async () => {
		let errorPropagated = false
		try {
			await solution.loadUserData('2')
		} catch {
			errorPropagated = true
		}
		// The function should handle all errors internally, never throwing
		assert.ok(
			!errorPropagated,
			'🚨 loadUserData should catch errors internally - errors should not propagate to the caller',
		)
	},
)
