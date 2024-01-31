//imports
const express = require("express");
const anigo = require("anigo-anime-api");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

//configure express instance
const app = express();
app.use(cors());
app.use(express.json()) 

//mongodb
const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function connectToMongo() {
    try {
        return await client.connect();
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

//crud
async function createUserDocument(collection, name, email, pw) {
    const UserDocument = {
        name: name,
        email: email,
        password: pw,
    };
 
    await collection.insertOne(UserDocument);
}

async function createUser(name, email, pw) {
    let mongoClient;
    try {
        mongoClient = await connectToMongo();
        const db = mongoClient.db('anime');
        const collection = db.collection('users');
        await createUserDocument(collection, name, email, pw);
        console.log("user created");
    } finally {
        await mongoClient.close();
    }
}

//port
const PORT = 5000;

//anigo api calls
async function getpopular() {
    return await anigo.getPopular();
}
async function getAnimeInfo(anime_id) {
    return await anigo.getAnimeInfoFromAnimix(anime_id);
}

//routes
app.get("/popular", (req, res) => {
    getpopular().then((data) => res.json(data));
});
app.get("/anime/:id", (req, res) => {
    getAnimeInfo(req.params.id).then((data) => res.json(data));
});
app.post("/user", (req, res) => {
    console.log(req.body);
    createUser(req.body.name, req.body.email, req.body.password).then(res.end());
});

//start server
app.listen(PORT, () => {
    console.log(`backend listening on port ${PORT}`);
    console.log(process.env.DB_URI);
})