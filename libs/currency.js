export const Currency = (item) => {
    const usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency:'USD'
    })
    return usDollar.format(Number(item))
}