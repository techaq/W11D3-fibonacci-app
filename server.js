const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to check if a number is a Fibonacci number
function isFibonacci(num) {
  let a = 0,
    b = 1;
  while (a < num) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return a === num;
}

// Route to check if a number is Fibonacci
app.get("/fibonacci/:number", (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    res.status(400).send("Invalid input. Please provide a valid number.");
    return;
  }

  if (isFibonacci(number)) {
    res.send("Very good. It is Fibonacci.");
  } else {
    res.send("I can tell this is not a Fibonacci number.");
  }
});

// Starts the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
