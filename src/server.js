const path = require("path");
const express = require("express");
const  app = express();

//Middleware
app.use(express.json());
const public_directory = path.join(__dirname, "../public/")
app.use(express.static(public_directory))

//Routes
app.get("/", (req, res) => {
    // res.send();
});

app.post("/tasks", (req, res) => {
    console.log(req.body);
    res.send({ message: "success!" })
});

app.listen(5000, () => {
    console.log("listening on port 5000");
}) 