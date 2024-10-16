const BillsCalc = (items, cat) => {
    if(!items || items.lenth <= 0) return

    const billsCat =   items.filter(item => item.category == cat)
    const paidBillsArr = []
    	
    billsCat.forEach(item => {
      paidBillsArr.push(Number(item.amount))
    })

    const paidBills = paidBillsArr.reduce((acc, cur) => acc+cur,0)

    
    return Number.parseFloat(paidBills).toFixed(2)
  
} 

export {BillsCalc}