import React from "react";
import { ListProducts } from "../components/Products/ListProducts";
import { AlertProduct } from "../components/Products/AlertProduct";
import { Container } from "react-bootstrap";
import { ProductFilter } from "../components/Products/ProductFilter";

export const Home = ({history}) => (
  <Container>
    <div className="App">
      <ProductFilter history={history} />
      <AlertProduct />
      <ListProducts />
    </div>
  </Container>
);