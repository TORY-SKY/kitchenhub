import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import ProductCart from "./components/ProductCart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: "Error page, go back bro",

      children: [
        {
          path: "/product",
          element: <h1>HAY THE ROUTING WORKS</h1>,
          errorElement: "404 not found",
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
