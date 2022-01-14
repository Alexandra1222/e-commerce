import React from "react";
import { Row } from "react-bootstrap";
import json from "../../examples/products.json";
import { Product } from "./Product";

export const ListProducts = () => {
  const products = json.products
  return (
    <Row xs={4}>
      {products.length < 0 ? (
        <div>
          <p>Cargando productos... </p>
        </div>
      ) : (
        products.map((product, index) => <Product key={index} item={product} />)
      )}
    </Row>
  );
};