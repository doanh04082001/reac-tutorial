import ItemCart from "./ItemCart";
const CartList = (props) => {
  const { carts, deleteItemCart, updateUpAmountCart, updateDownAmountCart } =
    props;

  return (
    <div>
      <header>
        <h2>Your Bag</h2>
      </header>

      {carts.map((cart, index) =>
        cart.amount > 0 ? (
          <ItemCart
            key={index}
            cart={cart}
            deleteItemCart={deleteItemCart}
            updateUpAmountCart={updateUpAmountCart}
            updateDownAmountCart={updateDownAmountCart}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};
export default CartList;
