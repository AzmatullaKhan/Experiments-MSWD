const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>';
const dbName = '<database>';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
    if (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        return;
    }

    console.log('Connected to MongoDB Atlas');

    const db = client.db(dbName);

    // Perform CRUD operations here
const collection = db.collection('<collection-name>');

// Create operation
const documentToInsert = { name: 'John', age: 30 };
collection.insertOne(documentToInsert, function (err, result) {
    if (err) {
        console.error('Error inserting document:', err);
        return;
    }
    console.log('Inserted document:', result.ops[0]);
});

// Read operation
collection.find({ name: 'John' }).toArray(function (err, documents) {
    if (err) {
        console.error('Error reading documents:', err);
        return;
    }
    console.log('Read documents:', documents);
});

// Update operation
collection.updateOne({ name: 'John' }, { $set: { age: 31 } }, function (err, result) {
    if (err) {
        console.error('Error updating document:', err);
        return;
    }
    console.log('Updated document:', result.modifiedCount);
});

// Delete operation
collection.deleteOne({ name: 'John' }, function (err, result) {
    if (err) {
        console.error('Error deleting document:', err);
        return;
    }
    console.log('Deleted document:', result.deletedCount);
});

// Close the client connection
client.close();

    client.close();
});
