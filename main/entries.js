/**
 * Read entries from each month and export it as JSON object
 */
import * as fs from 'fs';
import { storedData } from '../utils.js';
import { currentMonth } from './constants.js';

export const CURRENT_ENTRIES = storedData(
    fs.readFileSync(`../data/months/${currentMonth}/entries.json`, 'utf8')
)[0][`${currentMonth.toUpperCase()}_ENTRIES`];
