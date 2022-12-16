// import { useState } from "react";
import "./App.css";
// import CartList from "./component/CartList";
// import CartNull from "./component/CartNull";
// import Footer from "./component/Footer";
// import NavBar from "./component/navbar";
import PieChart from "./component/PieChart";
// import cartList from "./data/carts";
// import { Data } from "./utils/Data";
import { Chart, ArcElement } from "chart.js";
import Tab from "./component/Tab";
import { useState } from "react";
Chart.register(ArcElement);
const App = () => {
  // const [carts, setCart] = useState(cartList);

  // let totalAmount = 0;
  // let totalPrice = 0;
  // const totalCart = () => {
  //   for (let i = 0; i < carts.length; i++) {
  //     totalAmount += carts[i].amount;
  //   }
  //   return totalAmount;
  // };
  // totalCart();

  // const totalPriceCart = () => {
  //   for (let i = 0; i < carts.length; i++) {
  //     totalPrice += carts[i].amount * carts[i].price;
  //   }
  //   return totalPrice;
  // };
  // totalPriceCart();

  // const deleteItemCart = (id) => {
  //   setCart(carts.filter((cart) => cart.id !== id));
  // };

  // const updateUpAmountCart = (id) => {
  //   const newCart = [...carts];
  //   newCart.map((cart) =>
  //     cart.id === id ? (cart.amount = ++cart.amount) : cart.amount
  //   );
  //   setCart(newCart);
  // };
  // const updateDownAmountCart = (id) => {
  //   const newCart = [...carts];
  //   newCart.map((cart) => {
  //     if (cart.id === id) {
  //       if (cart.amount > 0) {
  //         cart.amount = --cart.amount;
  //       }
  //     }
  //   });
  //   setCart(newCart);
  // };

  // const deleteCarts = () => {
  //   setCart([]);
  // };
  // const cartCheckAmount = carts.filter(function (cartItem) {
  //   if (cartItem.amount > 0) {
  //     return true;
  //   }
  // });

  // const [chartData, setChartData] = useState({
  //   labels: Data.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained ",
  //       data: Data.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  // if (carts.length === 0 || cartCheckAmount.length === 0) {
  //   return (
  //     <section className="cart">
  //       <header>
  //         <h2>Your Bag</h2>
  //         <h4 className="empty-cart">Cart is no product</h4>
  //       </header>
  //     </section>
  //   );
  // }

  return <Tab />;
};

export default App;
