import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function Search() {
  const location = useLocation();
  const searchQuery = location.state?.query || ""; // Retrieve search query from state
  const products = [
    { id: 1, name: "Nike Dunk High Wu-Tang (2024)", price: 138, img: "img1.jpg" },
    { id: 2, name: "Nike Sportswear Club Puffer Jacket", price: 131, img: "img2.jpg" },
    { id: 3, name: "Nike Sportswear x Central Cee", price: 262, img: "img3.jpg" },
    { id: 4, name: "Nike Pro THERMA-FIT Hyperwarm Hood", price: 32, img: "img4.jpg" },
    { id: 5, name: "adidas Pro THERMA-FIT Hyperwarm Hood", price: 32, img: "img4.jpg" },
  ];
  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container fluid>
      <Row className="my-3">
        <Col>
          <h6>Home / Search</h6>
          <h4>
            Browse <b>{filteredProducts.length} results</b> for "{searchQuery}"
          </h4>
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={product.img}
                      alt={product.name}
                      className="p-3"
                    />
                    <Card.Body>
                      <Card.Title className="fs-6">{product.name}</Card.Title>
                      <Card.Text className="text-muted">Lowest Ask</Card.Text>
                      <h6>${product.price}</h6>
                    </Card.Body>
                    <Card.Footer className="text-end">
                      <i className="fa-regular fa-heart"></i>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No products match your search.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
