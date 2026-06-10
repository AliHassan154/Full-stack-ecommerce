import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'


const app = express()
//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

dotenv.config({ path: './.env' });
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/auth', authRoute);

app.use('/api/category', categoryRoute);

app.use('/api/product', productRoute);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})