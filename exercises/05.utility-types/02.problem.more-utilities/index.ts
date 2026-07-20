// Record, Readonly, Omit, Required, Exclude, Extract, NonNullable

type User = {
	id: string
	name: string
	email: string
	bio?: string
	website?: string
}

// 🐨 Create Config as a Record of string keys to number values
// 🐨 Create ReadonlyUser where all User properties are readonly
// 🐨 Create UserWithoutId that removes the id property
// 🐨 Create RequiredUser where optional properties become required

// Union type utilities
type Status = 'pending' | 'active' | 'inactive' | 'deleted' | null | undefined

// 🐨 Create ActiveStatus — Status values that remain after removing deleted
//    and nullish entries
// 🐨 Create ValidStatus — remove null and undefined
// 🐨 Create StringStatus — keep only string variants of Status

// 🐨 Create these fixtures with your types, then export them:
// config → { timeout: 5000, retries: 3 }
// readonlyUser → { id: '1', name: 'Alice', email: 'a@b.com' }
// newUser → { name: 'Bob', email: 'b@b.com' }
// fullUser → includes bio: 'Hello!' and website: 'https://alice.dev'
// status → 'active' (ValidStatus)
// activeStatus → 'pending' (ActiveStatus)

// export { config, readonlyUser, newUser, fullUser, status, activeStatus }
