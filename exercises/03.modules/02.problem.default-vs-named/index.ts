function formatCurrency(amount: number): string {
	return `$${amount.toFixed(2)}`
}

function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US')
}

class Formatter {
	formatCurrency(amount: number): string {
		return formatCurrency(amount)
	}

	formatDate(date: Date): string {
		return formatDate(date)
	}
}

export { formatCurrency, formatDate }

export default Formatter