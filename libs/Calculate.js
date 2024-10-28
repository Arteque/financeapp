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
    return render
}



//Bills 
export const BillsData = () => {
    
    //Const
    const paidBillsArr = []
    const upcommingBillsArr = []
    const dueSoonBillsArr = []

    //Dates
    const today = new Date()
    const currentDate = {
        "date":today.toJSON(),
        "date-in-seconds":today.getTime(),
        "month":today.getMonth(),
        "day":today.getDate(),
        "year":today.getFullYear()    
    }


    //Recurring Bills
    const recurringBills = data.transactions.filter(item => item.recurring)


    //Recuring Bills

    recurringBills.forEach(item => {
        //get day
        item.dueDate = new Date(item.date).getDate()
        //Paid and Not Paid  Bills based on the current day of the month (Assuming that the Amounts paid automatically)
        item.paid = item.dueDate < currentDate.day ? true : false
        // if the item is paid push it to paidbills array. If not push the item to the upcomming bills
        item.paid ? paidBillsArr.push(item) : upcommingBillsArr.push(item)
    })


    //DUESOON bills from the upcommingBills
    upcommingBillsArr.forEach(item => {
        const amountDaysNeededforSoon = 4
        const itemDate = new Date(item.date).getDate()
        // if the item is inside the upcomingBills array, that's mean: the item date is bigger the current date
        itemDate - currentDate.day < amountDaysNeededforSoon && dueSoonBillsArr.push(item)
    })

    // Return the data
    const paidBills  = paidBillsArr.reduce((acc, cur) => acc + cur.amount, 0)
    const upcommingBills  = upcommingBillsArr.reduce((acc, cur) => acc + cur.amount, 0)
    const dueSoonBills = dueSoonBillsArr.reduce((acc, cur) => acc + cur.amount, 0)

    

    const render = {
        "data": TransactionsData(),
        "recurringBills":recurringBills,
        "today":currentDate,
        "paidBills": Math.abs(paidBills),
        "paidBills__count":paidBillsArr.length,
        "upcommingBills": Math.abs(upcommingBills),
        "upcomingBills__count":upcommingBillsArr.length,
        "dueSoon": Math.abs(dueSoonBills),
        "dueSoon__count":dueSoonBillsArr.length
    }

    //console for test
    console.log(render)

    return render

}


export const PosOrNegNumb = (item) => {
    return Math.abs(item)
}