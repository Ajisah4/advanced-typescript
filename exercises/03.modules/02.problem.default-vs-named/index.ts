// Default vs Named Exports

// Named imports
import { formatCurrency, formatDate } from './utils.ts'

// Default import
import Formatter from './utils.ts'

// console.log(formatCurrency(99.99)) // '$99.99'
// console.log(formatDate(new Date()))

const formatter = new Formatter()

// console.log(formatter.formatCurrency(199.99)) // '$199.99'
// console.log(formatter.formatDate(new Date()))

// Re-export so tests can verify the imports
export { formatCurrency, formatDate, Formatter }