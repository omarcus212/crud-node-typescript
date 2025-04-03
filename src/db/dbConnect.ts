import mysql, { ConnectionOptions, Pool } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const connection: ConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool: Pool = mysql.createPool(connection);

pool.getConnection((error, conn) => {
    if (error) {
        console.error('Erro ao conectar ao banco:', error);
        return;
    }
    console.log(`Banco conectado com sucesso!! DATABASE: ${process.env.DB_NAME}`);
    conn.release();
});

export default pool;