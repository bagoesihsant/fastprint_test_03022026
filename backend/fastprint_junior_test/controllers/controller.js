// Import Modules
import * as services from '../services/service.js';

/**
 * Show all available produk that have status of 'bisa dijual'
 * @param { express.Request } req Express.js Request method used for capturing User Request more documentation on http://expressjs.com/
 * @param { express.Response } res Express.js Response method used for giving response to User request from API more documentation on http://expressjs.com/
 * @param { express.Next } next Express.js Next method used to forward current request to forward request handler more documentation on http://expressjs.com/
 * @returns Express JS Response for API Access
 */
export async function showAvailableProduk(req, res, next){

    try {

        const produk = await services.showAvailableProduk();

        if (!produk.ok) {
            return res.status(400).json({ message: 'No produk found' });
        }

        res.status(200).json({ message: 'Product Found', output: produk });

    } catch (error) {
        console.error('Controller Error', error);
    }

}

/**
 * Get all kategori from database
 * @param { express.Request } req Express.js Request method used for capturing User Request more documentation on http://expressjs.com/
 * @param { express.Response } res Express.js Response method used for giving response to User request from API more documentation on http://expressjs.com/
 * @param { express.Next } next Express.js Next method used to forward current request to forward request handler more documentation on http://expressjs.com/
 * @returns Express JS Response for API Access
 */
export async function getAllKategori(req, res, next){

    try {

        const kategori = await services.getAllKategori();

        if (!kategori.ok) {
            return res.status(400).json({ message: 'No kategori found' });
        }

        res.status(200).json({ message: 'Kategori found', output: kategori });

    } catch (error) {
        console.error('Controller Error', error);
    }

}

/**
 * Get all status from database
 * @param { express.Request } req Express.js Request method used for capturing User Request more documentation on http://expressjs.com/
 * @param { express.Response } res Express.js Response method used for giving response to User request from API more documentation on http://expressjs.com/
 * @param { express.Next } next Express.js Next method used to forward current request to forward request handler more documentation on http://expressjs.com/
 * @returns Express JS Response for API Access
 */
export async function getAllStatus(req, res, next){

    try {

        const status = await services.getAllStatus();

        if (!status.ok) {
            return res.status(400).json({ message: 'No status found' });
        }

        res.status(200).json({ message: 'Status found', output: status });

    } catch (error) {
        console.error('Controller Error', error);
    }

}

/**
 * Add record to produk table in database
 * @param { express.Request } req Express.js Request method used for capturing User Request more documentation on http://expressjs.com/
 * @param { express.Response } res Express.js Response method used for giving response to User request from API more documentation on http://expressjs.com/
 * @param { express.Next } next Express.js Next method used to forward current request to forward request handler more documentation on http://expressjs.com/
 * @returns Express JS Response for API Access
 */
export async function addProduk(req, res, next){

    try {

        // Get users inputs
        const requestBody = req.body;

        // Check Nama Produk
        if (requestBody.nama_produk.trim().length < 1) {
            return res.status(400).json({ message: 'Nama Produk harus diisi.' });
        }

        // Check Harga Produk
        if (!/^\d+$/.test(requestBody.harga_produk)) {
            return res.status(400).json({ message: 'Harga Produk hanya boleh terdiri dari angka.' });
        }

        // Check Kategori Produk
        if (!/^\d+$/.test(requestBody.kategori_produk)) {
            return res.status(400).json({ message: 'Kategori Produk invalid.' });
        }

        // Check Status Produk
        if (!/^\d+$/.test(requestBody.status_produk)) {
            return res.status(400).json({ message: 'Status Produk invalid.' });
        }

        const inputProduk = await services.addProduk({
            nama: requestBody.nama_produk,
            harga: requestBody.harga_produk,
            kategori: requestBody.kategori_produk,
            status: requestBody.status_produk,
        });

        if (!inputProduk.ok) {
            return res.status(400).json({ message: 'Gagal menambahkan Produk.' });
        }

        return res.status(200).json({ message: 'Berhasil menambahkan Produk.' })

    } catch (error) {
        console.error('Controller Error', error);
    }

}

/**
 * Delete record of produk in table produk
 * @param { express.Request } req Express.js Request method used for capturing User Request more documentation on http://expressjs.com/
 * @param { express.Response } res Express.js Response method used for giving response to User request from API more documentation on http://expressjs.com/
 * @param { express.Next } next Express.js Next method used to forward current request to forward request handler more documentation on http://expressjs.com/
 * @returns Express JS Response for API Access
 */
export async function delProduk(req, res, next){

    try {

        // Get users input from url
        const requestParams = req.params;

        // Check produk id
        if (requestParams.id.trim().length < 1) {
            return res.status(400).json({ message: 'Id Produk tidak boleh kosong.' });
        }

        // Check produk id 2
        if (!/^\d+$/.test(requestParams.id)) {
            return res.status(400).json({ message: 'Id Produk invalid.' });
        }

        // Check produk id 3
        const checkProduk = await services.checkProduk({ id: requestParams.id });

        if (!checkProduk.ok) {
            return res.status(400).json({ message: 'Produk dengan Id ini tidak ditemukan.' });
        }

        const delProdukResult = await services.deleteProduk({ id: requestParams.id });

        if (!delProdukResult.ok) {
            return res.status(400).json({ message: 'Gagal menghapus Produk.' });
        }

        return res.status(200).json({ message: 'Berhasil menghapus produk.' });

    } catch (error) {
        console.error('Controller Error', error);
    }

}

/**
 * Get specific record of produk with Id in table produk
 * @param { express.Request } req Express.js Request method used for capturing User Request more documentation on http://expressjs.com/
 * @param { express.Response } res Express.js Response method used for giving response to User request from API more documentation on http://expressjs.com/
 * @param { express.Next } next Express.js Next method used to forward current request to forward request handler more documentation on http://expressjs.com/
 * @returns Express JS Response for API Access
 */
export async function getSpecificProduk(req, res, next){

    try {

        // Get Users input from url
        const requestParams = req.params;

        // Check produk id
        if (requestParams.id.trim().length < 1) {
            return res.status(400).json({ message: 'Id Produk tidak boleh kosong.' });
        }

        // Check produk id 2
        if (!/^\d+$/.test(requestParams.id)) {
            return res.status(400).json({ message: 'Id Produk invalid.' });
        }

        // Check produk id 3
        const checkProduk = await services.checkProduk({ id: requestParams.id });

        if (!checkProduk.ok) {
            return res.status(400).json({ message: 'Produk dengan Id ini tidak ditemukan.' });
        }

        const specificProduk = await services.getSpecificProduk({ id: requestParams.id });

        if (!specificProduk.ok) {
            return res.status(400).json({ message: 'Produk tidak ditemukan.' });
        }

        return res.status(200).json({ message: 'Produk found', output: specificProduk });


    } catch (error) {
        console.error('Controller Error', error);
    }

}


export async function updateProduk(req, res, next){

    try {

        // Get Users input from url
        const requestParams = req.params;

        console.log(requestParams);

        // Get Users input from body
        const requestBody = req.body;

        // Check produk id
        if (requestParams.id.trim().length < 1) {
            return res.status(400).json({ message: 'Id Produk tidak boleh kosong.' });
        }

        // Check produk id 2
        if (!/^\d+$/.test(requestParams.id)) {
            return res.status(400).json({ message: 'Id Produk invalid.' });
        }

        // Check produk id 3
        const checkProduk = await services.checkProduk({ id: requestParams.id });

        if (!checkProduk.ok) {
            return res.status(400).json({ message: 'Produk dengan Id ini tidak ditemukan.' });
        }

        // Check Nama Produk
        if (requestBody.update_nama_produk.trim().length < 1) {
            return res.status(400).json({ message: 'Nama Produk harus diisi.' });
        }

        // Check Harga Produk
        if (!/^\d+$/.test(requestBody.update_harga_produk)) {
            return res.status(400).json({ message: 'Harga Produk hanya boleh terdiri dari angka.' });
        }

        // Check Kategori Produk
        if (!/^\d+$/.test(requestBody.update_kategori_produk)) {
            return res.status(400).json({ message: 'Kategori Produk invalid.' });
        }

        // Check Status Produk
        if (!/^\d+$/.test(requestBody.update_status_produk)) {
            return res.status(400).json({ message: 'Status Produk invalid.' });
        }

        const updateResult = await services.updateProduk({
            id: requestParams.id,
            nama: requestBody.update_nama_produk,
            harga: requestBody.update_harga_produk,
            kategori: requestBody.update_kategori_produk,
            status: requestBody.update_status_produk,
        });

        if (!updateResult.ok) {
            return res.status(400).json({ message: 'Gagal mengubah Produk.' });
        }

        return res.status(200).json({ message: 'Berhasil mengubah Produk.' })

    } catch (error) {
        console.error('Controller Error', error);
    }

}