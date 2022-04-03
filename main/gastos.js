/**
 * Import expenses template and push entries for each month.
 * Import functions from utils
 */
import { expenses } from '../data/data.js';
import {
    sumExpenses,
    totalExpensesByCategory,
    totalExpenses,
    createFile,
} from '../utils.js';
import { CURRENT_ENTRIES } from './entries.js';
import { currentMonth } from './constants.js';

CURRENT_ENTRIES.forEach((e) =>
    sumExpenses(expenses, e.category, e.key, e.quantity)
);

totalExpenses(totalExpensesByCategory(expenses));

createFile(totalExpensesByCategory(expenses), currentMonth);
