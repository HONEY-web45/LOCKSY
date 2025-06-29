import express from 'express'
import cors from "cors"
import bodyparser from "body-parser"
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
import { log } from 'console'
dotenv.config()
// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);


const app = express()
const port = process.env.PORT || 3000

const __dirname = path.dirname(fileURLToPath(import.meta.url));



app.use(cors())
app.use(bodyparser.json())

await client.connect();

const dbName = 'Locksy';

const db = client.db(dbName);
const collection = db.collection('Passwords')



app.post('/post', async (req, res) => {
  // 
  const password=req.body
  const doc=await collection.insertOne(password)
  
  res.send({message:"password saved successfully"})
  
})

  app.delete('/', async (req, res) => {
    //  console.log(req.body);
  const password=req.body
  const doc=await collection.deleteOne(password)
 })

app.get('/api', async (req, res) => {
  const { email } = req.query.email;
  const { sub } = req.query.sub;
  if(email){
   
const arr=await collection.find({email:email}).toArray()
res.json(arr)}

else if(sub){
const arr=await collection.find({sub:sub}).toArray()
res.json(arr)
  
}
})


app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})