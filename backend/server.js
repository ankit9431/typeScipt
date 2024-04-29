import express from 'express'
import connectDB from './db/db.js'
import userRouter from './routers/user.router.js'
import cors from 'cors'
const app=express()
const PORT=5002
connectDB()
app.use(cors())
app.use(express.json())
const server=app.listen(5002,()=>{
    console.log('server started')
})
app.use('/api/user',userRouter)

