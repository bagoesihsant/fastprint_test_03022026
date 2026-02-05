import express from 'express';
import cors from 'cors';

import { router } from './routes/routes.js';

const PORT = 8080;
const app = express();

// Endpoint Declaration
app.get('/', (req, res) => {
    res.status(200).json({message: 'API is working.'});
});

// Router Endpoint Declaration
app.use('/produk', router);

app.listen(PORT, () => {
    console.log(`App is now listening on port ${PORT}`);
});