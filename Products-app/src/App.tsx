import React, { Suspense } from "react";
import { MemoryRouter, Routes, Route } from "react-router";
import Product from "./Product";
import { Provider } from "react-redux";
//const App = () => <Product />;
import store from "./store";
interface Product {
  product?: string;
  helpers?: {
    location: Location;
    state: {
      [k: string]: string;
    };
  };
}
export default function ProductApp(props: Product) {
  return (
    <Provider store={store}>
      <Suspense fallback={"loading"}>
        <MemoryRouter>
          <Routes>
            <Route path="/login" />
            <Route path="/" element={<Product {...props} />} />
          </Routes>
        </MemoryRouter>
      </Suspense>{" "}
    </Provider>
  );
}
