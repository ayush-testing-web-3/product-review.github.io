import './App.css'
import productImageDesktop from "./assets/image-product-desktop.jpg";
import productImageMobile from "./assets/image-product-mobile.jpg";
import cartIcon from "./assets/icon-cart.svg";

export default function App() {

  return (

    <div className="section">

      <div className="column1">
        <img src={productImageDesktop} id="desktopImage" />
        <img src={productImageMobile} id="mobileImage" />
      </div>

      <div className="column2">

        <h2>PERFUME</h2>

        <h1>Gabrielle Essence Eau De Parfum</h1>

        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perumer-Creator for the House of CHANEL.</p>

        <h3>$149.99 <span style={{color: "grey", fontSize: "20px", fontWeight: "600", textDecoration: "line-through", marginLeft: "20px"}} >$169.99</span></h3>

        <div className="add_to_cart">
          <img src={cartIcon} />
          <a href='#' >Add to Cart</a>
        </div>

      </div>

    </div>

  )
}
