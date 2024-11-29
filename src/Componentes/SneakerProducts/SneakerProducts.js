import React, { useEffect, useState } from 'react';

function SneakerProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');  // State for search query

  
  useEffect(() => {
    // Fetch data from the API
    fetch('https://sneakers-rough-frost-7777.fly.dev/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the response to check its structure

        // Assuming the products might be inside 'data' or another key
        if (data && data.data && Array.isArray(data.data)) {
          setProducts(data.data);  // Adjust the key to where the products are stored
        } else {
          setError("No products available.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Handle the change in the search query input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.attributes.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.attributes.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.attributes.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.attributes.colorway.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Sneaker Products</h2>
      <input
        type="text"
        placeholder="Search by name, brand, city, or colorway..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '300px',
        }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              style={{
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '5px',
                width: '300px',
              }}
            >
              <img
                src={p.attributes.image.url}
                alt={p.attributes.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <h3>{p.attributes.name}</h3>
              <p><strong>Brand:</strong> {p.attributes.brand}</p>
              <p><strong>City:</strong> {p.attributes.city}</p>
              <p><strong>Colorway:</strong> {p.attributes.colorway}</p>
              <p><strong>Release Year:</strong> {p.attributes.release_year}</p>
              <p><strong>Description:</strong> {p.attributes.description}</p>
              <h4>Sizes:</h4>
              <ul>
                {p.attributes.sizes.map((size, index) => (
                  <li key={index}>
                    Size: {size.size_number} | MRP: ₹{size.mrp} | Lowest Bid: ₹{size.lowest_bid}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No products match your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default SneakerProducts;
