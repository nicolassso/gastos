import {expenses} from '../data/data.js'
import {sumExpenses, totalExpensesByCategory, totalExpenses, createFile} from '../utils.js'
import {initialEntriesArray} from './constants.js'


initialEntriesArray.forEach(e => sumExpenses(expenses, e.category, e.key, e.quantity))

totalExpenses(totalExpensesByCategory(expenses))

createFile(totalExpensesByCategory(expenses))

console.log(expenses)
