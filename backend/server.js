const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

// GET products from Fake Store API
app.get("/products", async (req, res) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching products"
    });
  }
});

// Simple cart (local memory)

let cart = [];

app.post("/cart", (req, res) => {

  cart.push(req.body);

  res.json({
    message: "Added to cart",
    cart
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});