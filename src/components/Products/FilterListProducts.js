import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { getProductsByCategories } from "../../app/services/productsService";
import { Product } from "./Product";

export const FilterListProducts = ({category}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsByCategories(category)
      .then(data => setProducts(data))
  },[category])

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