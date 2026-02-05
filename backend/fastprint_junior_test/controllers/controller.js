// Import Modules
import * as services from '../services/service.js';


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