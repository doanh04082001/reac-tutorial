import { useState } from "react";
import "./App.css";
import CartList from "./component/CartList";
import Footer from "./component/Footer";
import NavBar from "./component/navbar";
import cartList from "./data/carts";

const App = () => {
  const [carts, setCart] = useState(cartList);

  return (
    <main>
      <NavBar />
      <section class="cart">
        <header>
          <h2>your bag</h2>
        </header>

        <CartList carts={carts} />

        <Footer />
      </section>
    </main>
  );
};

export default App;
