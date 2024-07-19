import { useProducts } from "./ContextAPI/ContextProvider";
import Navigationbar from "./Navbar/Navigationbar";

const ProductCart = () => {
  const { state } = useProducts();

  // const { id, category, image, price } = props.data;
  // // console.log(id);
  return (
    <div>
      <Navigationbar />
      <section>
        <div className="cart-summary">
          <div className="prev">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1701 4.99997C10.3195 4.99946 10.4671 5.03243 10.6021 5.09646C10.737 5.16049 10.856 5.25395 10.9501 5.36997L15.7801 11.37C15.9272 11.5489 16.0076 11.7733 16.0076 12.005C16.0076 12.2366 15.9272 12.461 15.7801 12.64L10.7801 18.64C10.6103 18.8442 10.3664 18.9726 10.102 18.997C9.83758 19.0214 9.5743 18.9397 9.37008 18.77C9.16586 18.6002 9.03744 18.3563 9.01306 18.0919C8.98868 17.8275 9.07034 17.5642 9.24008 17.36L13.7101 12L9.39008 6.63997C9.2678 6.49318 9.19012 6.31444 9.16624 6.12489C9.14236 5.93535 9.17328 5.74292 9.25533 5.57039C9.33739 5.39787 9.46715 5.25245 9.62926 5.15136C9.79137 5.05027 9.97905 4.99774 10.1701 4.99997Z"
                  fill="black"
                />
              </svg>
            </span>
            <p>CART SUMMARY</p>
          </div>
          <div className="summary-details">
            <div className="total-price-container">
              <p className="total-text">Text</p>
              <h3>$270.00</h3>
              <h1>No. of items in cart: {state.cart.length}</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCart;
