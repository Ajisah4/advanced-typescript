import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('getUserProperty, makeRequest, config, and httpMethods are exported', () => {
	assert.ok(
		'getUserProperty' in solution,
		'🚨 Make sure you export "getUserProperty"',
	)
	assert.ok('makeRequest' in solution, '🚨 Make sure you export "makeRequest"')
	assert.ok('config' in solution, '🚨 Make sure you export "config"')
	assert.ok('httpMethods' in solution, '🚨 Make sure you export "httpMethods"')
})

await test('getUserProperty returns correct property values', () => {
	type User = {
		id: string
		name: string
		email: string
		age: number
	}

	const user: User = { id: '1', name: 'Alice', email: 'a@b.com', age: 30 }
	assert.strictEqual(
		solution.getUserProperty(user, 'name'),
		'Alice',
		'🚨 getUserProperty(user, "name") should be "Alice"',
	)
	assert.strictEqual(
		solution.getUserProperty(user, 'age'),
		30,
		'🚨 getUserProperty(user, "age") should be 30',
	)
	assert.strictEqual(
		solution.getUserProperty(user, 'id'),
		'1',
		'🚨 getUserProperty(user, "id") should be "1"',
	)
	assert.strictEqual(
		solution.getUserProperty(user, 'email'),
		'a@b.com',
		'🚨 getUserProperty(user, "email") should be "a@b.com"',
	)
})

await test('typeof extracts type from value', () => {
	assert.strictEqual(
		solution.config.apiUrl,
		'https://api.example.com',
		'🚨 config.apiUrl should be "https://api.example.com"',
	)
	assert.strictEqual(
		solution.config.timeout,
		5000,
		'🚨 config.timeout should be 5000',
	)
})

await test('as const creates literal union types', () => {
	assert.strictEqual(
		solution.makeRequest('GET', '/api/users'),
		'GET /api/users',
		'🚨 makeRequest("GET", "/api/users") should be "GET /api/users"',
	)
	assert.strictEqual(
		solution.makeRequest('POST', '/api/users'),
		'POST /api/users',
		'🚨 makeRequest("POST", "/api/users") should be "POST /api/users"',
	)
	assert.strictEqual(
		solution.makeRequest('PUT', '/api/users'),
		'PUT /api/users',
		'🚨 makeRequest("PUT", "/api/users") should be "PUT /api/users"',
	)
	assert.strictEqual(
		solution.makeRequest('DELETE', '/api/users'),
		'DELETE /api/users',
		'🚨 makeRequest("DELETE", "/api/users") should be "DELETE /api/users"',
	)
})
