require('dotenv').config()
var jwt = require('jsonwebtoken');
const express=require('express');
const cors=require('cors');
const port=process.env.PORT||5000;
const app=express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors())
app.use(express.json())
// job-portal
// m6iXRSDmhhriqlPq



const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mghj8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = client.db("job-portal");
    const jobCollections = database.collection("jobs");
    //job related APIS
    // get all data of jobCollections
    app.get('/jobs',async(req,res)=>{
      const list = jobCollections.find()
      const result= await list.toArray()
      res.send(result)
    })
    //id wise individual data from jobCollection
    app.get('/jobs/:id',async(req,res)=>{
      const id= req.params.id
      const filter={_id:new ObjectId(id)}
      const result=await jobCollections.findOne(filter)
      res.send(result)
    })

    //auth related APIS
    app.post('/jwt' ,async(req,res)=>{
      const user =req.body
      const token=jwt.sign({
        data: user
      }, 'secret', { expiresIn: 60 * 60 });
      res.send(token)
    })

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
  res.send('simple curd operation is running successfully')
})
app.listen(port,()=>{
  console.log(`job is running on port:${port}`)
})