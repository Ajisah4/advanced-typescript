// Introduction to the infer Keyword

// The `infer` keyword lets you extract types from within other types.
// Think of it as "pattern matching" for types.

// 🐨 Create ArrayElement<T>
//    - if T is an array, extract its element type
//    - otherwise never
//    Examples: ArrayElement<Array<number>> → number
//              ArrayElement<string> → never

// 🐨 Create PromiseResult<T>
//    - if T is a Promise, extract its resolved type
//    - otherwise return T as-is
//    Examples: PromiseResult<Promise<string>> → string
//              PromiseResult<boolean> → boolean

// 🐨 Create FunctionReturn<T>
//    - if T is a function, extract its return type
//    - otherwise never
//    Examples: FunctionReturn<() => string> → string
//              FunctionReturn<string> → never

// Test types
type Numbers = Array<number>
type Strings = Array<string>
type Users = Array<{ id: string; name: string }>

// Test your types
// type N = ArrayElement<Numbers>     // number
// type S = ArrayElement<Strings>     // string
// type U = ArrayElement<Users>       // { id: string; name: string }
// type X = ArrayElement<string>      // never

// type P1 = PromiseResult<Promise<string>>   // string
// type P2 = PromiseResult<boolean>           // boolean

// type R1 = FunctionReturn<() => string>     // string
// type R2 = FunctionReturn<(x: number) => boolean>  // boolean

// 🐨 Implement async fetchUser(): Promise<{ id: string; name: string }>
//    that resolves to { id: '1', name: 'Alice' }
// 🐨 Create FetchUserResult by applying PromiseResult to fetchUser's result type
// 🐨 Export fetchUser
// export { fetchUser }
