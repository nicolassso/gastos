
// I will pass the name of whatever I am spending in, and and array of spent money
export function sumExpenses(expenses, category, key = {}, quantity){

    if(key){
        expenses[category][key] =  quantity.reduce((preVal, currVal) => preVal + currVal, expenses[category][key])
    }else{
        expenses[category] =  quantity.reduce((preVal, currVal) => preVal + currVal, expenses[category])
    }
}