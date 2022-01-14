import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getProductById } from "../app/services/productsCartServices";
import { ProductDetail } from "../components/Products/ProductDetail";

export const ProductView = ({ match }) => {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const { id } = match.params;
    getProductById(id)
      .then((productFromDB) => setProductDetail(productFromDB))
      .catch((err) => console.log(err));
  }, [match]);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Información de Producto</h1>
          {productDetail && <ProductDetail item={productDetail} />}
        </Col>
      </Row>
    </Container>
  );
};