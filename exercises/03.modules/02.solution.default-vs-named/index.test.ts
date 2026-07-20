import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('formatCurrency, formatDate, and Formatter are exported', () => {
	assert.ok(
		'formatCurrency' in solution,
		'🚨 Make sure you export "formatCurrency"',
	)
	assert.ok('formatDate' in solution, '🚨 Make sure you export "formatDate"')
	assert.ok('Formatter' in solution, '🚨 Make sure you export "Formatter"')
})

await test('formatCurrency formats numbers as currency', () => {
	const result = solution.formatCurrency(99.99)
	assert.strictEqual(
		result,
		'$99.99',
		'🚨 formatCurrency(99.99) should return "$99.99"',
	)
})

await test('formatDate formats dates correctly', () => {
	// Use explicit time to avoid timezone issues
	const date = new Date(2024, 0, 15, 12, 0, 0)
	const result = solution.formatDate(date)
	assert.ok(
		/1\/15\/2024/.test(result),
		'🚨 formatDate should include "1/15/2024" for January 15, 2024',
	)
})

await test('Formatter class formats currency and dates', () => {
	const formatter = new solution.Formatter()
	assert.strictEqual(
		formatter.formatCurrency(199.99),
		'$199.99',
		'🚨 Formatter#formatCurrency(199.99) should return "$199.99"',
	)
	// Use explicit time to avoid timezone issues
	const date = new Date(2024, 0, 15, 12, 0, 0)
	assert.ok(
		/1\/15\/2024/.test(formatter.formatDate(date)),
		'🚨 Formatter#formatDate should include "1/15/2024" for January 15, 2024',
	)
})
