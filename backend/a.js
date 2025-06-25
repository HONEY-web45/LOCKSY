import express from 'express'
import cors from "cors"
import bodyparser from "body-parser"
import { MongoClient } from 'mongodb'



// Connection URL
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

const app = express()
const port = 3000



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
app.delete('/', async (req, res) => {
  //  console.log(req.body);
  const password=req.body
  const doc=await collection.deleteOne(password)
  console.log(doc);
  
  
})

app.get('/', async (req, res) => {
const arr=await collection.find({}).toArray()
  res.json(arr)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})