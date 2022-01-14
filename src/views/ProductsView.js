import React from "react";
import { Container } from "react-bootstrap";
import { FilterListProducts } from "../components/Products/FilterListProducts";
import { ProductFilter } from "../components/Products/ProductFilter";

export const ProductsView = ({ history, match }) => {
  const { category } = match.params;

  return (
    <Container>
      <div className="App">
        <ProductFilter history={history} />
        <FilterListProducts category={category} />
      </div>
    </Container>
  );
};