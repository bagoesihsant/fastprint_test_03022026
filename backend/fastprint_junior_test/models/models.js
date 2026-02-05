// Import Modules
import { query, parameterizedQuery } from '../helpers/query.js';

/**
 * Get all record from produk table
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function getAllProduk(){

    try {
        const result = await query("SELECT produk.nama_produk, kategori.nama_kategori, produk.harga, status.nama_status FROM produk JOIN kategori ON produk.kategori_id = kategori.id_kategori JOIN status ON produk.status_id = status.id_status");
        return result;
    } catch (error) {
        console.error('Model Error', error);
    }

}

/**
 * Get all record of available to sell produk from produk table
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function getAllAvailableProduk(){

    try {
        const result = await query("SELECT produk.nama_produk, kategori.nama_kategori, produk.harga, status.nama_status FROM produk JOIN kategori ON produk.kategori_id = kategori.id_kategori JOIN status ON produk.status_id = status.id_status WHERE status.id_status = 1");
        return result;
    } catch (error) {
        console.error('Model Error', error);
    }

}

/**
 * Get all record from kategori table
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function getAllKategori(){

    try {
        const result = await query("SELECT * FROM kategori");
        return result;
    } catch (error) {
        console.error('Model Error', error);
    }

}

/**
 * Get all record from status table
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function getAllStatus(){

    try {
        const result = await query("SELECT * FROM status");
        return result;
    } catch (error) {
        console.error('Model Error', error);
    }

}