const express = require("express");
const app = express();
const port = 3000;

let todos = [{ id: 1, title: "hello all", description: "how r u" }];
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(port, ()=>console.log(`Server started on port ${port}`));