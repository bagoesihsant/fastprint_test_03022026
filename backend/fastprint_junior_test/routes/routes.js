// Import Modules
import express from 'express';

// Import Controllers
import * as controllers from '../controllers/controller.js';

export const router = express.Router();

// Middlewares
router.use(express.json());

// Routes Declaration
router.get('/', controllers.showAvailableProduk);