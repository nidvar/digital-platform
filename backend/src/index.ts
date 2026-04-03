import express, { type Request, type Response } from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(routes);

const port = process.env.PORT || 5000;


app.use('/api', userRoutes);

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch((error) => console.log(error));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});