import data from "@/app/Api/data.json" 

//Global Functions

// reduce
function calSum(item){
    return item.reduce((accu, cur) => accu + cur,0)
}


// Overview
export const Overview = () => {
    const transactions = data.transactions
    const billsArr = []
    const incomeArr = []
    transactions.forEach(item => {
            const sign = Math.sign(item.amount)
            if(sign == "-1"){
                billsArr.push(item.amount)
            }else{
                incomeArr.push(item.amount) 
            }
    })
        
    const bills = billsArr.reduce((acc, cur) => acc + cur,0)
    const income = incomeArr.reduce((acc, cur) => acc + cur,0)
    const rest = income - Math.abs(bills)

    const render = {
        "billsTotal":Math.abs(bills),
        "incomeTotal":income,
        "Rest":rest
    }

    console.log(render)

}


//Pots
export const Pots = () => {
    // the data
    const potsData = data.pots
    
    // total saved money
    const totalSavedArr = []
    potsData.forEach(item => {
        totalSavedArr.push(Number(item.total))
    })
    const totalSaved = calSum(totalSavedArr)

    const render = {
        "data": potsData,
        "totalSaved":totalSaved
    }
    console.log(render)
}