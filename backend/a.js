import express from 'express'
import cors from "cors"
import bodyparser from "body-parser"
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);
console.log(process.env.MONGO_URL);

const app = express()
const port = process.env.PORT || 3000



app.use(cors())
app.use(bodyparser.json())

await client.connect();

const dbName = 'Locksy';

const db = client.db(dbName);
const collection = db.collection('Passwords')



app.post('/', async (req, res) => {
  //  console.log(req.body);
  const password=req.body
  const doc=await collection.insertOne(password)
  console.log(doc);
  res.send({message:"password saved successfully"})
  
})
// app.post('/data', async (req, res) => {
// const collection = db.collection('userData')

//   //  console.log(req.body);
//   const data=req.body
//   const doc=await collection.insertOne(data)
//   console.log(doc);
  
  
// })
app.delete('/', async (req, res) => {
  //  console.log(req.body);
  const password=req.body
  const doc=await collection.deleteOne(password)
  console.log(doc);
  
  
})

app.get('/', async (req, res) => {
  
   const { email } = req.query;
  console.log(email);
  
  
    
const arr=await collection.find({email:email}).toArray()
  res.json(arr)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})