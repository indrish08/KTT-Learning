const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3001;

const logger = (req, res, next) => {
  var logData = `[${new Date().toLocaleString()}] ${req.method} ${req.url}`;
  console.log(logData);
  fs.appendFile("logs.txt", logData + "\n", (err) => {
    if (err) throw err;
  });
  next();
};

app.use(logger);

let weatherData = {
  city: "New York",
  temperature: 22,
  condition: "Sunny",
};

let books = [
  { id: 1, title: "Node.js Basics", author: "John Doe" },
  { id: 2, title: "Express.js Fundamentals", author: "Jane Smith" },
];

app.get("/api/weather", (req, res) => {
  res.json(weatherData);
});

app.get("/api/books/:id?", (req, res) => {
  if (req.params.id) {
    const bookId = parseInt(req.params.id);
    const book = books[bookId - 1];
    // const book = books.find((b) => b.id === bookId);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } else {
    res.json(books);
  }
});

app.listen(PORT, () => {
  console.log(`Weather API is running on http://localhost:${PORT}/api/weather`);
  console.log(`Books API is running on http://localhost:${PORT}/api/books`);
});
