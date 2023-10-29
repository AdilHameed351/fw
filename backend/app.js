const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");

app.use(cors(
    {
        origin: ["https://fw-swart.vercel.app/"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(2000, () => {
    console.log("Server Started");
});

