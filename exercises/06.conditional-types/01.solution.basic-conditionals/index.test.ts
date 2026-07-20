import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('process is exported', () => {
	assert.ok('process' in solution, '🚨 Make sure you export "process"')
})

await test('Flatten extracts element type from arrays', () => {
	const arr = solution.process([1, 2, 3])
	assert.strictEqual(arr, 1, '🚨 process([1, 2, 3]) should return 1')
	assert.strictEqual(
		typeof arr,
		'number',
		'🚨 process([1, 2, 3]) should return a number',
	)

	const num = solution.process(42)
	assert.strictEqual(num, 42, '🚨 process(42) should return 42')
	assert.strictEqual(
		typeof num,
		'number',
		'🚨 process(42) should return a number',
	)
})

await test('process function handles arrays and non-arrays', () => {
	const stringArray = solution.process(['a', 'b', 'c'])
	assert.strictEqual(
		stringArray,
		'a',
		'🚨 process(["a", "b", "c"]) should return "a"',
	)

	const numberValue = solution.process(100)
	assert.strictEqual(numberValue, 100, '🚨 process(100) should return 100')
})
