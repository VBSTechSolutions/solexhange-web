import React from "react";
import "./Product.css";
const Products = () => {
  const categories = [
    "Sneakers",
    "Apparel",
    "Shoes",
    "Accessories",
    "Collectibles",
    "NFTs",
    "Trading Cards",
    "Electronics",
  ];

  const products = [
    {
      name: "Nike Kobe 9 Elite Low Protro Halo",
      price: "$125",
      img: "path_to_image_1",
    },
    {
      name: "Nike KD 17 NRG Aunt Pearl",
      price: "$143",
      img: "path_to_image_2",
    },
    {
      name: "Nike Dunk Low Rose Whisper (Women's)",
      price: "$49",
      img: "path_to_image_3",
    },
    {
      name: "Nike SB Dunk Low Pro White Gum",
      price: "$72",
      img: "path_to_image_4",
    },
    {
      name: "Nike Kobe 8 Protro College Navy",
      price: "$125",
      img: "path_to_image_5",
    },
    {
      name: "Nike Air VaporMax Plus Triple Black",
      price: "$125",
      img: "path_to_image_6",
    },
    {
      name: "Nike Dunk Low Retro White Black Panda (GS)",
      price: "$125",
      img: "path_to_image_7",
    },
    {
      name: "Nike Zoom Vomero 5 Supersonic Light Bone Black",
      price: "$125",
      img: "path_to_image_8",
    },
  ];

  return (
    <div className="app-container">
      <div className="row">
        <div className="sidebar col-lg-4">
          <h3>Category</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <div className="product-list col-lg-8">
          {products.map((product, index) => (
            <div className="row">
              <div className="product-card col-lg-2" key={index}>
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <p>Lowest Ask</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
