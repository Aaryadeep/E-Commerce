import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCLoudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCLoudinary();

// Middlewares
app.use(express.json())
app.use(cors())

// Api endpoints

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)


app.get('/', (req, res) => {
  res.send("API Working")
})

/* app.get('/data', (req, res) => {
  const data = {
    name: "Aaryadeep",
    age: 20
  };
  res.json(data);
}) */

app.listen(port, () => console.log("Server started on PORT: " + port))