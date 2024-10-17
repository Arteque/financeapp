const  PotsCalc = (items) => {
    const potsTargets = []
    const potsTotals = []
    items.forEch(item => {
        potsTargets.push(item.target)
        potsTotals.push(item.total)
    })

    return potsTargets, potsTotals
}

export {PotsCalc}