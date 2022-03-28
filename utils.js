
// I will pass the name of whatever I am spending in, and and array of spent money
export function sumExpenses(expenses, category, key = {}, quantity){

    if(key){
        expenses[category][key] =  quantity.reduce((preVal, currVal) => preVal + currVal, expenses[category][key])
    }else{
        expenses[category] =  quantity.reduce((preVal, currVal) => preVal + currVal, expenses[category])
    }
}

export function totalExpensesByCategory(expenses){
    let totalSpentByCategories = {}
    const expensesArray = Object.entries(expenses);
    
    expensesArray.map(category => {
        const keysArray = Object.values(category[1])
        const totalKeyExpenses = keysArray.reduce((prevKey, currKey) => prevKey + currKey, 0)
        const nestedObject = Object.values(keysArray)[1]
        const isNumber = typeof category[1] === "number"
        const isNestedObject = typeof nestedObject === "object"

        totalSpentByCategories = {...totalSpentByCategories, [category[0]]: totalKeyExpenses}

        if(isNestedObject){
            totalSpentByCategories = {...totalSpentByCategories, [category[0]]: Object.values(category[1])[0]}
        }
        if(isNumber){
            totalSpentByCategories = {...totalSpentByCategories, [category[0]]: category[1]}
        }

    })

    console.log(totalSpentByCategories)

    return totalSpentByCategories

}

export function totalExpenses(totalSpentByCategories){
    const expensesArray = Object.values(totalSpentByCategories);

    const totalSpent = expensesArray.reduce((prev, curr) => prev + curr, 0)

    console.log(totalSpent)
}