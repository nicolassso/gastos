/**
 * Import expenses template and push entries for each month.
 * Import functions from utils
 */
import {expenses} from '../data/data.js'
import {sumExpenses, totalExpensesByCategory, totalExpenses, createFile} from '../utils.js'
import {MARCH_ENTRIES} from './entries.js'


MARCH_ENTRIES.forEach(e => sumExpenses(expenses, e.category, e.key, e.quantity))

totalExpenses(totalExpensesByCategory(expenses))

createFile(totalExpensesByCategory(expenses), 'march')

