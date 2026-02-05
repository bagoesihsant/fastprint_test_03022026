import express from 'express';

export const router = express.Router();

// Middlewares
router.use(express.json());

// Routes Declaration
router.get('/', (req, res) => {
    res.status(200).json({message: "Accessed from router."});
});