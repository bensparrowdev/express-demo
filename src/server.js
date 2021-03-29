const express = require("express");
const  app = express();

app.use(express.json());


app.get("/", (req, res) => {
    console.log(req.query);
    res.send({ message: "Hello mate", date: "29th March 2021"});
});

app.get("/profile", (req, res) => {
    res.send({message: `hello  my name is ${req.query.name}`})
    //localhost:5000/profile/?name=ben     this is the query for name
});

app.get("/person/:id", (req, res) => {
    console.log(req.params.id);

    res.send({ message: "hello" })
});

app.post("/", (req, res) => {
    console.log(req.body);

    res.send({ data: req.body })
});

app.listen(5000, () => {
    console.log("listening on port 5000");
})