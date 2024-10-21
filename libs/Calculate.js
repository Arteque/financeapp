import data from "@/app/Api/data.json" 

//Global Functions

// reduce
function calSum(item){
    return item.reduce((accu, cur) => accu + cur,0)
}


// Overview
export const OverviewData = () => {
    const transactions = data.transactions
    const currentBalance = data.balance.current
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
        "Rest":rest,
        "currentBalance": currentBalance
    }

    
    return render

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
    return render
}

//Budgets

export const BudgetsData = () => {
    //Vars
    const budgetsData = data.budgets
    const transactions = data.transactions
    const categories = []
    const result = {}


    budgetsData.forEach(budget => {
        categories.push(budget.category)
    })

    // Sort the transactions in budgets categories
    for(let i = 0; i < categories.length; i++){
        result[categories[i]] = transactions.filter(item => item.category == categories[i])
    }

    //Amount / Budget Cat in the Trans entry
   const categoriesTotalAmounts = Object.keys(result).reduce((acc, category) => {
        const total = result[category].reduce((sum, transaction) => sum + transaction.amount, 0)
        acc[category] = Math.abs(total)
        return acc
   },{})




    const render = {
        "data":budgetsData,
        "transactions":result,
        "totalAmount":categoriesTotalAmounts,
    }

    return render   

}



//Transactions
export const TransactionsData = () => {
    const render = {
        "data":data.transactions
    }
    console.log(render)
    return render
}



//Bills 
export const BillsData = () => {
    
    const items = data.transactions
    const paidBillsArr = []
    //get the bills 
    const billsCatData = items.filter(transaction => transaction.category == 'Bills')
    billsCatData.forEach(item => {
        paidBillsArr.push(Number(item.amount))
    })

    const paidBillsAmount = paidBillsArr.reduce((accu, cur)=> accu + cur,0)

    
    
    
    //Date
    const date = new Date()
    const itemsDateIsPasst = items.forEach((item, index) => {
        const date = item.date.split("T")[0]
        const time = item.date.split("T")[1]
        const dateSplit = date.split("-")
        const dateParts =  {
            year: dateSplit[0],
            month: dateSplit[1],
            day: dateSplit[2],
        }
        
        console.log(dateParts.year, dateParts.month, dateParts.day + "/n" + 
            item.name + "  " + new Date(dateParts.year,  dateParts.month - 2, dateParts.day))
    })
    
    
    itemsDateIsPasst
    const render = {
        "data":items,
        "paidBills": Number.parseFloat(paidBillsAmount).toFixed(2),
    }

    
    return render

}