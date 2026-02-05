// Import Modules
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Create Dirname and File Path
const currentModuleURL = import.meta.url;
const __filename = fileURLToPath(currentModuleURL);
const __dirname = dirname(__filename);

// Set config from .env
dotenv.config({ path: join(__dirname, '.env') });

// Create PostgreSQL Database Pool
export const dbPool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
});
