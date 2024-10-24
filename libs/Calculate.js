import data from "@/app/Api/data.json" 
import next from "next"

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
    
    //Dates
    const currentDate = new Date()
    const currenDateJSON = {
        "date":currentDate.toJSON(),
        "date-in-seconds":currentDate.getTime(),
        "month":currentDate.getMonth(),
        "day":currentDate.getDate(),
        "year":currentDate.getFullYear()    
    }


    //Recurring Bills
    const recurringBills = data.transactions.filter(item => item.recurring)



    // Return the data
    const render = {
        "data": data.transactions,
        "recurring-bills":recurringBills,
        "today":currenDateJSON
    }

    //console for test
    console.log(render)

    return render

}


const recurringNextDateBill = (billDate, currentDate) => {
    
}