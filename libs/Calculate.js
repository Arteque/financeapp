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
    
    const items = data.transactions
    const recurring = items.filter(item => item.recurring)
    const paidBillsArr = []
    const upcomingBillsArr = []
    // Get the date and the date ms for the camparaison 
    const todayDate = new Date()
    const todayGetTime = todayDate.getTime()
    const milliSecondsperDay = 1000 * 60 * 60 * 24

     recurring.forEach(item => {
            item.dateGetTime = new Date(item.date).getTime()
            item.todayDate = todayDate.toJSON()
            item.todayDateGetTime = todayGetTime

            const theDate = new Date(item.date)
            const nextMonth = new Date(theDate)

            nextMonth.setMonth(new Date().getMonth() + 1)
            nextMonth.setDate(theDate.getDate())

            if(item.dateGetTime < todayGetTime) {
            item.dateIsPassed=true
            item.billPaid = true
            item.nextBill = nextMonth.toJSON()
            
            paidBillsArr.push(item)
            } else {
            item.dateIsPassed = false,
            item.nextBill = nextMonth.toJSON()
            upcomingBillsArr.push(item)
            
            
            }
            const duesoon = new Date()
            duesoon.setDate(duesoon.getDate() + 4)
            item.duesoondatelimit = duesoon.toJSON()
            const duesoon_getTime = duesoon.getTime()
            item.duesoondatelimitintime = duesoon_getTime
            if(new Date(item.nextBill).getTime()  <= duesoon_getTime){
                item.daysleft = Math.floor((new Date(item.nextBill).getTime() - todayGetTime) / milliSecondsperDay)
                item.duesoon = true
            }else{
                item.duesoon = false
            }
        
     })


     

    const render = {
        "data":items,
        "recurring":recurring,
        "billsTotal":Math.abs(recurring.reduce((acc, cur) => acc + cur.amount, 0)),
        "paidBills":paidBillsArr,
        "paidBillsCount":paidBillsArr.length,
        "paidBillsTotal":Math.abs(paidBillsArr.reduce((acc, cur) => acc + cur.amount, 0)).toFixed(2),
        "upcomingBills":upcomingBillsArr,
        "upcomingBillsCount":upcomingBillsArr.length,
        "upcomingBillsTotal":Math.abs(upcomingBillsArr.reduce((acc, cur) => acc + cur.amount,0)).toFixed(2)
    }

    console.log(render)
    return render

}