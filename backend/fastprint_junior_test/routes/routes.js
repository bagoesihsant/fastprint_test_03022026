// Import Modules
import express from 'express';

// Import Controllers
import * as controllers from '../controllers/controller.js';

export const router = express.Router();

// Middlewares
router.use(express.json());

// Routes Declaration
router.get('/', controllers.showAvailableProduk);
router.get('/kategori', controllers.getAllKategori);
router.get('/status', controllers.getAllStatus);

router.get('/:id', controllers.getSpecificProduk);

router.post('/', controllers.addProduk);

router.delete('/:id', controllers.delProduk);

router.put('/:id', controllers.updateProduk)