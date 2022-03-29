import * as fs from 'fs';
/**
 *  Pass the expenses template, the category of the expense, the key if any and the quantity of it.
 */
export function sumExpenses(expenses, category, key = {}, quantity) {
    if (key) {
        expenses[category][key] = quantity.reduce(
            (preVal, currVal) => preVal + currVal,
            expenses[category][key]
        );
    } else {
        expenses[category] = quantity.reduce(
            (preVal, currVal) => preVal + currVal,
            expenses[category]
        );
    }
}
/**
 *
 * Returns an object with the keys being the category of every possible expense, and the value being the sum of all the different keys within the category.
 */
export function totalExpensesByCategory(expenses) {
    let totalSpentByCategories = {};
    const expensesArray = Object.entries(expenses);

    expensesArray.map((category) => {
        const keysArray = Object.values(category[1]);
        const totalKeyExpenses = keysArray.reduce(
            (prevKey, currKey) => prevKey + currKey,
            0
        );
        const nestedObject = Object.values(keysArray)[1];
        const isNumber = typeof category[1] === 'number';
        const isNestedObject = typeof nestedObject === 'object';

        totalSpentByCategories = {
            ...totalSpentByCategories,
            [category[0]]: totalKeyExpenses,
        };

        if (isNestedObject) {
            totalSpentByCategories = {
                ...totalSpentByCategories,
                [category[0]]: Object.values(category[1])[0],
            };
        }
        if (isNumber) {
            totalSpentByCategories = {
                ...totalSpentByCategories,
                [category[0]]: category[1],
            };
        }
    });

    return totalSpentByCategories;
}
/**
 * Returns the total sum of all the different expenses.
 */
export function totalExpenses(totalSpentByCategories) {
    const expensesArray = Object.values(totalSpentByCategories);

    const totalSpent = expensesArray.reduce((prev, curr) => prev + curr, 0);

    return totalSpent;
}
/**
 * It first reads the content of the JSON files of each month
 * Then writes in the object returned from the totalExpensesByCategory() function.
 */
export async function createFile(totalSpentByCategories, month) {
    const monthData = {
        [month]: totalSpentByCategories,
        ['total']: totalExpenses(totalSpentByCategories),
    };
    const storedDataString = await fs.readFileSync(
        `../data/months/${month}/${month}.json`,
        'utf8'
    );

    let initialData = storedData(storedDataString);
    initialData.push(monthData);
    initialData = sanitizeData(storedDataString, initialData);

    const finalData = JSON.stringify(initialData);

    fs.writeFile(`../data/months/${month}/${month}.json`, finalData, (err) => {
        if (err) throw err;
    });
}
/**
 * Determines whether the string passed from the JSON files is empty or not, returning an empty array if it is empty, or the object format of the content.
 */
export function storedData(storedDataString) {
    if (storedDataString === '') {
        return [];
    }
    return JSON.parse(storedDataString);
}
/**
 * It receives the data stored in the JSON file, and the new data from the entries file. It first checks if the stored data is empty, returning the new data.
 * If the stored data has records, it updates to the new data, avoiding creating new objects every time the program runs
 */
function sanitizeData(storedDataString, newData) {
    if (storedDataString === '') {
        return newData;
    }
    return [newData[1]];
}
