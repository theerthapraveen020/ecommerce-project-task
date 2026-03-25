import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
const [name, setName] = useState("");
const [price, setPrice] = useState("");

const API = "http://localhost:5000/products";

// Fetch products
useEffect(() => {
axios.get(API)
.then(res => setProducts(res.data));
}, []);

// Add product
const addProduct = () => {



const newProduct = {
  id: products.length + 1,
  title: name,
  price: price,
  image: "https://via.placeholder.com/100"
};

setProducts([...products, newProduct]);

setName("");
setPrice("");

};

// Delete product
const deleteProduct = (id) => {

const updated = products.filter(
  p => p.id !== id
);

setProducts(updated);

};

// Add to cart
const addToCart = (product) => {

setCart([...cart, product]);

alert("Added to cart");

};

return (
  <div className="container">

    <h1>Fake Store E-commerce</h1>

    <h2>Add Product</h2>

    <div className="form">

      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>
        Add Product
      </button>

    </div>

    <hr />

    <h2>Products</h2>

    <div className="products">

      {products.map((p) => (
        <div className="card" key={p.id}>

          <img src={p.image} width="80" />

          <h3>{p.title}</h3>

          <p>₹ {p.price}</p>

          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>

          <br /><br />

          <button onClick={() => deleteProduct(p.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>

    <hr />

    <div className="cart">

      <h2>Cart Items: {cart.length}</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>
        </div>
      ))}

    </div>

  </div>
);}

export default App;