// const { MongoClient } = require('mongodb');
// const uri = 'mongodb://localhost:27017/hockey-players';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const sampleData = require("./sample-data.json");

class Database {
    // static async connect() {
    //   await client.connect();
    //   console.log('Connected to database');
    // }
  
    // static async disconnect() {
    //   await client.close();
    //   console.log('Disconnected from database');
    // }
  
    // static async findAll(collectionName) {
    //   const collection = client.db().collection(collectionName);
    //   const cursor = collection.find();
    //   const result = await cursor.toArray();
    //   return result;
    // }
  
    // static async findById(collectionName, id) {
    //   const collection = client.db().collection(collectionName);
    //   const result = await collection.findOne({ _id: new ObjectId(id) });
    //   return result;
    // }
  
    // static async create(collectionName, data) {
    //   const collection = client.db().collection(collectionName);
    //   const result = await collection.insertOne(data);
    //   return result.insertedId;
    // }
  
    // static async update(collectionName, id, data) {
    //   const collection = client.db().collection(collectionName);
    //   const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
    //   return result.modifiedCount;
    // }
  
    // static async delete(collectionName, id) {
    //   const collection = client.db().collection(collectionName);
    //   const result = await collection.deleteOne({ _id: new ObjectId(id) });
    //   return result.deletedCount;
    // }

    static async findAll(collectionName) {
        const collection = sampleData[collectionName];
        const result = await collection;
        return result;
    }
  
    static async findById(collectionName, id) {
        const collection = sampleData[collectionName];
        const result = collection.find(player => {
            return player.name === id
        })
        return result;
    }
  }

  module.exports = Database;