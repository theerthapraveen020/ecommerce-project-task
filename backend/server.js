const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// GET products from Fake Store API
app.get("/products", async (req, res) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    res.json(data);

  } catch (error) {
    console.error("Fetch error:", error);

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

// IMPORTANT: use Render port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});