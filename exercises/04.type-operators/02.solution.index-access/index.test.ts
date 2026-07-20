import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('profile, post, and user are exported', () => {
	assert.ok('profile' in solution, '🚨 Make sure you export "profile"')
	assert.ok('post' in solution, '🚨 Make sure you export "post"')
	assert.ok('user' in solution, '🚨 Make sure you export "user"')
})

await test('index access types extract nested types correctly', () => {
	assert.strictEqual(
		solution.profile.avatar,
		'https://example.com/avatar.jpg',
		'🚨 profile.avatar should be "https://example.com/avatar.jpg"',
	)
	assert.strictEqual(
		solution.profile.bio,
		'Hello!',
		'🚨 profile.bio should be "Hello!"',
	)
})

await test('index access extracts array element types', () => {
	assert.strictEqual(solution.post.id, '1', '🚨 post.id should be "1"')
	assert.strictEqual(
		solution.post.title,
		'Hello World',
		'🚨 post.title should be "Hello World"',
	)
	assert.strictEqual(
		solution.post.published,
		true,
		'🚨 post.published should be true',
	)
})

await test('index access with union keys extracts union types', () => {
	type ApiResponse = {
		status: number
		error: string | null
	}

	type StatusOrError = ApiResponse['status' | 'error']
	const status: StatusOrError = 200
	const error: StatusOrError = 'Not found'
	assert.strictEqual(status, 200, '🚨 status should be 200')
	assert.strictEqual(error, 'Not found', '🚨 error should be "Not found"')
})

await test('keyof with index access extracts value types', () => {
	type UserType = {
		id: string
		name: string
		profile: {
			avatar: string
			bio: string
		}
	}

	type UserValues = UserType[keyof UserType]
	const id: UserValues = '1'
	const name: UserValues = 'Alice'
	const profile: UserValues = { avatar: 'url', bio: 'bio' }
	assert.strictEqual(id, '1', '🚨 id should be "1"')
	assert.strictEqual(name, 'Alice', '🚨 name should be "Alice"')
	assert.deepStrictEqual(
		profile,
		{ avatar: 'url', bio: 'bio' },
		'🚨 profile should equal { avatar: "url", bio: "bio" }',
	)
})
