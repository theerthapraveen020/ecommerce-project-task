const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

// GET products from Fake Store API
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );

    res.json(response.data);

  } catch (error) {
    console.error("Axios error:", error.message);

    res.status(500).json({
      message: "Error fetching products",
      error: error.message
    });
  }
});

// Simple cart
let cart = [];

app.post("/cart", (req, res) => {
  cart.push(req.body);

  res.json({
    message: "Added to cart",
    cart
  });
});

// IMPORTANT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});