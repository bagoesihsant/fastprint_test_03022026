// Import Modules
import { dbPool } from '../config/db.js';

/**
 * Execute Raw Query
 * @param { String } rawQuery Raw Query from user ex: SELECT, INSERT, UPDATE, DELETE
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function query(rawQuery){

    try {

        // Retrieve Client from Database Pool
        const client = await dbPool.connect();

        try {

            // Start Time
            const startTime = Date.now();

            // Execute Query
            const result = await client.query(rawQuery);

            // Finish Time
            const finishTime = Date.now() - startTime;

            // Log
            console.log('Executed Query', { duration: `${finishTime}ms`, rowCount: result.rowCount });

            // Return result
            return result;

        } catch (error) {
            console.error('Query Error', error);
        }

    } catch (error) {
        console.error('Connection Error', error);
    }

}

/**
 * Execute Parameterized Raw Query
 * @param { String } rawQuery Raw Query with parameters from user ex: SELECT, INSERT, UPDATE, DELETE
 * @param { Array } params array of multiple data type for raw query parameters ex: [ 'My Name', 26, 'Los Angeles', true ]
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function parameterizedQuery(rawQuery, params){

    try {

        // Retrieve Client from Database Pool
        const client = await dbPool.connect();

        try {

            // Start Time
            const startTime = Date.now();

            // Execute Query
            const result = await client.query(rawQuery, params);

            // Finish Time
            const finishTime = Date.now() - startTime;

            // Log
            console.log('Executed Query', { duration: `${finishTime}ms`, rowCount: result.rowCount });

            // Return result
            return result;

        } catch (error) {
            console.error('Query Error', error);
        }

    } catch (error) {
        console.error('Connection Error', error);
    }

}