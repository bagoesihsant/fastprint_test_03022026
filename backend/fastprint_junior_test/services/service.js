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

/**
 * Get all kategori from database
 * @returns { Custom Object } Custom Object with value of ok (Boolean), and output (Array) with empty output or complete data
 */
export async function getAllKategori(){

    try {

        // Query Execution
        const allKategori = await models.getAllKategori();

        // Check query result
        if (allKategori.rowCount < 1) {
            return { ok: false, output: [] }
        }

        // Return query result if success
        return { ok: true, output: allKategori.rows }

    } catch (error) {
        console.error('Service Error', error);
    }

}

/**
 * Get all status from database
 * @returns { Custom Object } Custom Object with value of ok (Boolean), and output (Array) with empty output or complete data
 */
export async function getAllStatus(){

    try {

        // Query Execution
        const allStatus = await models.getAllStatus();

        // Check query result
        if (allStatus.rowCount < 1) {
            return { ok: false, output: [] }
        }

        // Return query result if success
        return { ok: true, output: allStatus.rows }

    } catch (error) {
        console.error('Service Error', error);
    }

}