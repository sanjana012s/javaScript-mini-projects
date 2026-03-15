const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Dummy Posts Data
let posts = [
    {
        id: "1",
        username: "Akash",
        content: "I love coding"
    },
    {
        id: "2",
        username: "Rahul",
        content: "Node.js is awesome"
    },
    {
        id: "3",
        username: "Priya",
        content: "Learning Express"
    }
];


// SHOW ALL POSTS
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});


// HOME ROUTE
app.get("/", (req, res) => {
    res.redirect("/posts");
});


// EDIT ROUTE
app.get("/posts/:id/edit", (req, res) => {

    let { id } = req.params;

    let post = posts.find((p) => id === p.id);

    res.render("edit", { post });

});


// UPDATE ROUTE
app.put("/posts/:id", (req, res) => {

    let { id } = req.params;
    let newContent = req.body.content;

    let post = posts.find((p) => id === p.id);

    post.content = newContent;

    res.redirect("/posts");

});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});