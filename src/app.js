const express = require("express");

const app = express();

// app.use((req, res) => {
//   res.send("Hello, World!");
// }); //this code listens to all requests and sends a response regardless of path (/, /about, /contact, etc.)

//order of executation also matters in express.js, so if you put the above code before the routes, it will not reach the routes.

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

//since app.use(); matches all requests by default, we should use app.get(), app.post(), etc. for specific routes.

//example GET, POST, PUT, PATCH AND DELETE using /user
app.get("/user", (req, res) => {
  // logic to fetch data from the db
  res.send("Data fetched successfully!");
});

app.post("/user", (req, res) => {
  // logic saving data to the db
  res.send("Data saved successfully!");
});

app.put("/user", (req, res) => {
  // logic to update data in the db
  res.send("Data updated successfully!");
});

app.patch("/user", (req, res) => {
  // logic to partially update data in the db
  res.send("Data partially updated successfully!");
});

app.delete("/user", (req, res) => {
  // logic to delete data from the db
  res.send("Data deleted successfully!");
});

app.listen(5555, () => {
  console.log("Server is running on port 5555");
});
