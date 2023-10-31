const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://anjanprasad112:a0zDJ7ESYOmxDXmM@cluster0.k0ddy8s.mongodb.net/?retryWrites=true&w=majority";

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
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



const itemSchema = new mongoose.Schema({
    title: String,
    lyrics: String,
  });
  
  const Item = mongoose.model('Item', itemSchema);
  
  app.use(bodyParser.json());
  
  // Create a new item
  app.post('/items', async (req, res) => {
    const { title, description } = req.body;
    try {
      const newItem = new Item({ title, description });
      const savedItem = await newItem.save();
      res.json(savedItem);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create item.' });
    }
  });
  
  // Get all items
  app.get('/items', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve items.' });
    }
  });
  
  // Update an item by ID
  app.put('/items/:id', async (req, res) => {
    const { title, description } = req.body;
    const itemId = req.params.id;
    try {
      const updatedItem = await Item.findByIdAndUpdate(
        itemId,
        { title, description },
        { new: true }
      );
      if (!updatedItem) {
        res.status(404).json({ error: 'Item not found.' });
      } else {
        res.json(updatedItem);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update item.' });
    }
  });
  
  // Delete an item by ID
  app.delete('/items/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
      const deletedItem = await Item.findByIdAndRemove(itemId);
      if (!deletedItem) {
        res.status(404).json({ error: 'Item not found.' });
      } else {
        res.json(deletedItem);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete item.' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
