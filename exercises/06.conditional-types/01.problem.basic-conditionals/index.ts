// Basic Conditional Types

type IsString<T> = T extends string ? true : false

type IsArray<T> = T extends Array<unknown> ? true : false

type IsFunction<T> = T extends (...args: any[]) => any ? true : false

type Flatten<T> = T extends Array<infer U> ? U : T

type MyNonNullable<T> = T extends null | undefined ? never : T


// Test your types
type T1 = IsString<string>        // true
type T2 = IsString<number>        // false
type T3 = IsArray<Array<string>>  // true
type T4 = IsArray<string>         // false
type T5 = Flatten<Array<string>>  // string
type T6 = Flatten<number>         // number
type T7 = MyNonNullable<string | null> // string


function process<T>(value: T): Flatten<T> {
	if (Array.isArray(value)) {
		return value[0] as Flatten<T>
	}

	return value as Flatten<T>
}


// Examples
process([1, 2, 3]) // number
process(42) // number

export { process }