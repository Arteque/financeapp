export const Currency = (item) => {
    const usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency:'USD',
        minimumFractionDigits:2
    }).format(Math.abs(item))
    return item >= 0 ? `+${usDollar}` : `-${usDollar}`
}
