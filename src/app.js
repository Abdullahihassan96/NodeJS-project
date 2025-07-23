const express = require("express");

const app = express();

// app.use((req, res) => {
//   res.send("Hello, World!");
// }); //this code listens to all requests and sends a response regardless of path (/, /about, /contact, etc.)

//since the port listens all the requests, we add routes to specify requests

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page!");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact Page!");
});

app.get("/products", (req, res) => {
  res.send("Here are our products!");
});

app.listen(5555, () => {
  console.log("Server is running on port 5555");
});
