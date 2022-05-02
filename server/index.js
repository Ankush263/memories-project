import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/users.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.get('/', (req, res) => {
  res.send("Hello Ankush Banik123")
})

const CONNECTION_URL = 'mongodb+srv://Ankush263:Ankush263@cluster0.3c3fb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);







// const URL = "mongodb+srv://Ankush263:Ankush263@cluster0.3c3fb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"