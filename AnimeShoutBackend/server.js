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

//start server
app.listen(PORT, () => {
    console.log(`backend listening on port ${PORT}`);
})