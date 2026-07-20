// Basic Conditional Types

// 🐨 Create IsString<T> — true if T is string, otherwise false
// 🐨 Create IsArray<T> — true if T is an array, otherwise false
// 🐨 Create IsFunction<T> — true if T is a function, otherwise false
// 🐨 Create Flatten<T> — array element type when T is an array, otherwise T
// 🐨 Create MyNonNullable<T> — remove null and undefined from T

// Test your types
// type T1 = IsString<string>        // true
// type T2 = IsString<number>        // false
// type T3 = IsArray<Array<string>>  // true
// type T4 = IsArray<string>         // false
// type T5 = Flatten<Array<string>>  // string
// type T6 = Flatten<number>         // number
// type T7 = MyNonNullable<string | null>  // string

// 🐨 Implement a runtime process(value) helper typed with Flatten:
//    - if value is an array, return its first element
//    - otherwise return value unchanged
//
// Examples:
// process([1, 2, 3]) // 1
// process(42) // 42

// 🐨 Export process so we can verify your work
// export { process }
