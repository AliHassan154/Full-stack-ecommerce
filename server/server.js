import dotenv from 'dotenv'
dotenv.config({ path: './.env' });
import express from 'express'
import connectDB from './config/db.js'
import morgan from 'morgan'
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
import path from 'path';
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));


const port = process.env.PORT || 5000

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use('/api/auth', authRoute);

app.use('/api/category', categoryRoute);

app.use('/api/product', productRoute);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})