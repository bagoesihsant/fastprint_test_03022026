// Import Modules
import * as models from '../models/models.js';

/**
 * Get all available produk from database
 * @returns { Custom Object } Custom Object with value of ok (Boolean), and output (Array) with empty output or complete data
 */
export async function showAvailableProduk(){

    try {

        // Query execution
        const avaiableProduk = await models.getAllAvailableProduk();

        // Check query result
        if (avaiableProduk.rowCount < 1) {
            return { ok: false, output: [] }
        }

        // Return query result if success
        return { ok: true, output: avaiableProduk.rows }

    } catch (error) {
        console.error('Service Error', error);
    }

}