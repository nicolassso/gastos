/**
 * Import expenses template and push entries for each month.
 * Import functions from utils
 */
import {
    totalExpensesByCategory,
    totalExpenses,
    createFile,
    entriesToObject,
} from './utils.js';
import { CURRENT_ENTRIES } from './entries.js';
import { currentMonth } from './constants.js';

entriesToObject(CURRENT_ENTRIES);

totalExpenses(totalExpensesByCategory(entriesToObject(CURRENT_ENTRIES)));

createFile(
    totalExpensesByCategory(entriesToObject(CURRENT_ENTRIES)),
    currentMonth
);
