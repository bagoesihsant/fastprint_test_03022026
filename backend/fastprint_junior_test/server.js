import express from 'express';
import cors from 'cors';

import { router } from './routes/routes.js';

const PORT = 8080;
const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:5173' }));

// Endpoint Declaration
app.get('/', (req, res) => {
    res.status(200).json({message: 'API is working.'});
});

// Router Endpoint Declaration
app.use('/produk', router);

app.listen(PORT, () => {
    console.log(`App is now listening on port ${PORT}`);
});