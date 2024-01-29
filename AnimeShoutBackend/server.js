//imports
const express = require("express");
const anigo = require("anigo-anime-api");
const cors = require("cors");

//configure express instance
const app = express();
app.use(cors());

//port
const PORT = 5000;


//logic
async function getpopular()  {
    return await anigo.getPopular();
}

//routes
app.get("/popular", (req, res) => {
    getpopular().then( (data) => res.json(data));
});

//start server
app.listen(PORT, ()=> {
    console.log(`backend listening on port ${PORT}`);
})