// Creating Mapped Types

type User = {
	id: string
	name: string
	email: string
	age: number
}

type ReadonlyUser = {
	readonly id: string
	readonly name: string
	readonly email: string
	readonly age: number
}

// All properties optional
type MyPartial<T> = {
	[K in keyof T]?: T[K]
}

// All properties required
type MyRequired<T> = {
	[K in keyof T]-?: T[K]
}

// All properties can also be null
type Nullable<T> = {
	[K in keyof T]: T[K] | null
}

// Remove readonly
type Mutable<T> = {
	-readonly [K in keyof T]: T[K]
}

// All properties become string
type Stringify<T> = {
	[K in keyof T]: string
}

// Test types
type PartialUser = MyPartial<User>
type RequiredUser = MyRequired<PartialUser>
type NullableUser = Nullable<User>
type MutableUser = Mutable<ReadonlyUser>
type StringUser = Stringify<User>

// Fixtures
const partial: PartialUser = {
	name: 'Alice',
}

const nullable: NullableUser = {
	id: null,
	name: 'Bob',
	email: null,
	age: 30,
}

const mutable: MutableUser = {
	id: '1',
	name: 'Alice',
	email: 'alice@example.com',
	age: 30,
}

// This should type-check because readonly was removed
mutable.name = 'Alice Smith'

export { partial, nullable, mutable }