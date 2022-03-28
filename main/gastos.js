import {expenses} from '../data/data.js'
import {sumExpenses, totalExpensesByCategory, totalExpenses, createFile} from '../utils.js'

// RENT EXPENSES
let rentData = {
    category: 'rent',
    key: 'rent',
    quantity: [230],
}

sumExpenses(expenses, rentData.category, rentData.key, rentData.quantity);


// BAIL EXPENSES
let bailData = {
    category: 'rent',
    key: 'bail',
    quantity: [230],
}

sumExpenses(expenses, bailData.category, bailData.key, bailData.quantity);


// DEBT EXPENSES
let debtData = {
    category: 'debt',
    key: 'paid',
    quantity: [150],
}

sumExpenses(expenses, debtData.category, debtData.key, debtData.quantity);


// RESTAURANT EXPENSES
let restaurantData = {
    category: 'food',
    key: 'restaurant',
    quantity: [6.79, 2.85, 2.16, 17.2, 6.4, 18.5, 6.8, 9.5, 7.30, 11.20],
}

sumExpenses(expenses, restaurantData.category, restaurantData.key, restaurantData.quantity);


// MARKET EXPENSES
let marketData = {
    category: 'food',
    key: 'market',
    quantity: [1.5, 36.5, 1.88, 1.25, 6.49, 19.69, 6.97, 6.82, 10.14, 8.83, 5.18 ],
}

sumExpenses(expenses, marketData.category, marketData.key, marketData.quantity);


// COFFEE EXPENSES
let coffeeData = {
    category: 'food',
    key: 'coffee',
    quantity: [1.5, 1.5, 6.2, 7.5, 8.5, 1.4],
}

sumExpenses(expenses, coffeeData.category, coffeeData.key, coffeeData.quantity);


// BEVERAGE EXPENSES
let beverageData = {
    category: 'food',
    key: 'beverage',
    quantity: [5],
}

sumExpenses(expenses, beverageData.category, beverageData.key, beverageData.quantity);


// METRO EXPENSES
let metroData = {
    category: 'travel',
    key: 'metro',
    quantity: [5, 1.65, 5, 5, 10],
}

sumExpenses(expenses, metroData.category, metroData.key, metroData.quantity);


// BUS EXPENSES
let busData = {
    category: 'travel',
    key: 'bus',
    quantity: [ 11.85, 11.83, 4.71, 11.83],
}

sumExpenses(expenses, busData.category, busData.key, busData.quantity);


// GAS EXPENSES
let gasData = {
    category: 'travel',
    key: 'gas',
    quantity: [15, 15],
}

sumExpenses(expenses, gasData.category, gasData.key, gasData.quantity);


// CASH EXPENSES
let cashData = {
    category: 'cash',
    key: null,
    quantity: [10, 10],
}

sumExpenses(expenses, cashData.category, cashData.key, cashData.quantity);


// GYM EXPENSES
let gymData = {
    category: 'gym',
    key: null,
    quantity: [33],
}

sumExpenses(expenses, gymData.category, gymData.key, gymData.quantity);


// CONDOMS EXPENSES
let condomsData = {
    category: 'sex',
    key: 'condoms',
    quantity: [12.9],
}

sumExpenses(expenses, condomsData.category, condomsData.key, condomsData.quantity);


// BARBER EXPENSES
let barberData = {
    category: 'beauty',
    key: 'barber',
    quantity: [10],
}

sumExpenses(expenses, barberData.category, barberData.key, barberData.quantity);


console.log(expenses)
totalExpenses(totalExpensesByCategory(expenses))
createFile(totalExpensesByCategory(expenses))

