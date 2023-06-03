import  express  from 'express';
import  color  from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

dotenv.config();

//database config
connectDB();

//rest object
const app = express();

// middel wares
app.use(express.json())
app.use(morgan('dev'))


app.use("/api/v1/auth",authRoutes);


//rest api 
app.get('/',(req,res)=>{
    res.send({
        message:"Welcome to ecommerce app"
    })
})

//port

const   PORT = process.env.PORT || 8000;
//run listen

app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE   } mode on port ${PORT}`.bgCyan.white)
})