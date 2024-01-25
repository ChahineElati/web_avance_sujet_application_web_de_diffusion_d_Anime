//imports
const express = require("express");
const anigo = require("anigo-anime-api");

//express instance
const app = express();

//port
const PORT = 5000;


//logic
async function getpopular()  {
    console.log(await anigo.getRecentEpisodesFromAnimix());
}

//routes
app.get("", (req, res) => {
    res.send("hello world");
    
});

//start server
app.listen(PORT, ()=> {
    console.log(`backend listening on port ${PORT}`);
    getpopular();
})