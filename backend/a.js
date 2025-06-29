import express from 'express'
import cors from "cors"
import bodyparser from "body-parser"
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
dotenv.config()
// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);


const app = express()
const port = process.env.PORT || 3000

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 🧠 Serve frontend from root `dist`
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.use(cors())
app.use(bodyparser.json())

await client.connect();

const dbName = 'Locksy';

const db = client.db(dbName);
const collection = db.collection('Passwords')



app.post('/', async (req, res) => {
  // 
  const password=req.body
  const doc=await collection.insertOne(password)
  
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
  
  
  
})

app.get('/', async (req, res) => {
  
   const { email } = req.query;
 
  
  
    
const arr=await collection.find({email:email}).toArray()
  res.json(arr)
})



app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})