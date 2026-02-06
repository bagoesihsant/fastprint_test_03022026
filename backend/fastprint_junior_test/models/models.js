// Import Modules
import { query, parameterizedQuery } from '../helpers/query.js';

/**
 * Get all record from produk table
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function getAllProduk(){

    try {
        const result = await query("SELECT produk.id_produk, produk.nama_produk, kategori.nama_kategori, produk.harga, status.nama_status FROM produk JOIN kategori ON produk.kategori_id = kategori.id_kategori JOIN status ON produk.status_id = status.id_status");
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
        const result = await query("SELECT produk.id_produk, produk.nama_produk, kategori.nama_kategori, produk.harga, status.nama_status FROM produk JOIN kategori ON produk.kategori_id = kategori.id_kategori JOIN status ON produk.status_id = status.id_status WHERE status.id_status = 1");
        return result;
    } catch (error) {
        console.error('Model Error', error);
    }

}

/**
 * Get produk with specific id in tabel produk in database
 * @param { Produk } produk custom object containing id
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function getSpecificProduk(produk){

    try {
        const result = await parameterizedQuery(
            "SELECT * FROM produk WHERE produk.id_produk = $1",
            [ produk.id ]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error);
    }

}

/**
 * Check if produk with specific id exist in database
 * @param { Produk } produk custom object containing id
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function checkProduk(produk){

    try {
        const result = await parameterizedQuery(
            "SELECT id_produk FROM produk WHERE produk.id_produk = $1",
            [ produk.id ]
        );
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

/**
 * Add record to produk table in database
 * @param { Produk } produk custom object containing nama, harga, kategori, dan status produk
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function addProduk(produk){

    try {
        const result = await parameterizedQuery(
            "INSERT INTO produk (nama_produk, harga, kategori_id, status_id) VALUES ($1, $2, $3, $4)",
            [ produk.nama, produk.harga, produk.kategori, produk.status ]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error);
    }

}

/**
 * Delete record from produk table in database
 * @param { Produk } produk custom object containing nama, harga, kategori, dan status produk
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function deleteProduk(produk){

    try {
        const result = await parameterizedQuery(
            "DELETE FROM produk WHERE produk.id_produk = $1",
            [ produk.id ]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error);
    }

}

/**
 * Update record in produk table in database
 * @param { Produk } produk custom object containing nama, harga, kategori, dan status produk
 * @returns { pg.Result } pg module query result, containing rows, rowCount, fields, more on http://node-postgres.com/
 */
export async function updateProduk(produk){

    try {
        const result = await parameterizedQuery(
            "UPDATE produk SET nama_produk = $2, harga = $3, kategori_id = $4, status_id = $5 WHERE produk.id_produk = $1",
            [ produk.id, produk.nama, produk.harga, produk.kategori, produk.status ]
        );
        return result;
    } catch(error) {
        console.error('Model Error', error);
    }

}