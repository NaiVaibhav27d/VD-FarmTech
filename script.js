$(document).ready(function () {
    $('nav a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

const [products, setProducts] = useState([
    {
      id: 1,
      name: 'NPK Fertilizers',
      description: 'The secret handshake between plants and their nutrient buddies!',
      image: 'Images/NPK.png',
      price: '₹500',
    },
    // Add more products here
  ]);

  <div key={product.id} className="product-card">
  <img src={product.image} alt={product.name} />
  <h3>{product.name}</h3>
  <p>{product.description}</p>
  <p>Price: {product.price}</p>
  <button>Buy Now</button>
</div>

// react.jsx

import React, { useState } from 'react';
import './styles.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'NPK Fertilizers',
      description: 'The secret handshake between plants and their nutrient buddies!',
      image: 'Images/NPK.png',
      price: '₹500',
    },
    // Add more products here
  ]);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    console.log(contactForm);
  };
}