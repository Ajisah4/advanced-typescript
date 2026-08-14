// Introduction to the infer Keyword

type ArrayElement<T> = T extends Array<infer U> ? U : never

type PromiseResult<T> = T extends Promise<infer U> ? U : T

type FunctionReturn<T> =
	T extends (...args: any[]) => infer R ? R : never


// Test types
type Numbers = Array<number>
type Strings = Array<string>
type Users = Array<{ id: string; name: string }>


// Test your types
type N = ArrayElement<Numbers>     // number
type S = ArrayElement<Strings>     // string
type U = ArrayElement<Users>       // { id: string; name: string }
type X = ArrayElement<string>      // never

type P1 = PromiseResult<Promise<string>>   // string
type P2 = PromiseResult<boolean>           // boolean

type R1 = FunctionReturn<() => string>     // string
type R2 = FunctionReturn<(x: number) => boolean>  // boolean


async function fetchUser(): Promise<{ id: string; name: string }> {
	return {
		id: '1',
		name: 'Alice',
	}
}


type FetchUserResult = PromiseResult<ReturnType<typeof fetchUser>>


export { fetchUser }