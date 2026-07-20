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

// 🐨 Create MyPartial<T> — all properties optional
// 🐨 Create MyRequired<T> — all properties required
// 🐨 Create Nullable<T> — all properties Original | null
// 🐨 Create Mutable<T> — remove readonly from all properties
// 🐨 Create Stringify<T> — all properties become string

// Test your types
// type PartialUser = MyPartial<User>
// type RequiredUser = MyRequired<PartialUser>
// type NullableUser = Nullable<User>
// type MutableUser = Mutable<ReadonlyUser>
// type StringUser = Stringify<User>

// 🐨 Create and export fixtures:
// partial → { name: 'Alice' }
// nullable → { id: null, name: 'Bob', email: null, age: 30 }
// mutable → a full writable user object (reassigning .name should type-check)

// export { partial, nullable, mutable }
