import express from 'express'
import './config/enviroment.js'
import { connexion } from './config/db.js'
import mongoose from 'mongoose'
import cors from 'cors'
import { register } from './routes/register.js'
import {account} from './routes/account.js'
import { product } from './routes/product.js'
import { favorite } from './routes/favorite.js'
import { category } from './routes/category.js'

const app= express()

app.use(cors({origin:'http://localhost:5173'}))
app.use(express.json())

app.use(register)
app.use(account)
app.use(product)
app.use(favorite)
app.use(category)

app.use((req,res,next)=>{

    const err=new Error('Not Found')
    err.status=404

    next(err)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).send({
        error: {
          status: err.status || 500,
          message: err.message
        }
      })
        
    }
)


async function server() {
    
    await connexion()
    
    app.listen(process.env.PORT,()=>console.log(`server on... http://localhost:${process.env.PORT}`))
}

/* mongoose.connection.on('error',(err)=>{console.error(`error: ${err}`)}) */

server()
