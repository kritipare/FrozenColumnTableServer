// index.js

import express from "express";
import { data } from "./data.js";

const app = express();

app.get("/", (req, res) => {
    // This will send the JSON data to the client.
    res.header("Access-Control-Allow-Origin", "*").json(data);
});

// Server setup
app.listen(5000, () => {
    console.log("server running");
});
