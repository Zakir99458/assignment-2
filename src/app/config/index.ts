import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(process.cwd(), '.env')});

console.log("in index.ts");
export default {
    port: process.env.PORT,
    database_url: process.env.DATABSE_URL,

}