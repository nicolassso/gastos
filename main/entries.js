/**
 * Read entries from each month and export it as JSON object
 */
import * as fs from 'fs';
import { storedData } from '../utils.js';

export const MARCH_ENTRIES = storedData(
    fs.readFileSync('../data/months/march/entries.json', 'utf8')
)[0].MARCH_ENTRIES;
