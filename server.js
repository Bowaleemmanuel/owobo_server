import express, { urlencoded } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
 
import userRouter from "./Routes/userRoutes.js";
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));

app.use('/api/user', userRouter);

const port = process.env.PORT

// app.get('/', (req, res) =>{
//     res.send('Owobo Collections')
// })

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})