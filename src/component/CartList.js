import ItemCart from "./ItemCart";
const CartList = (props) => {
  const { carts } = props;
  return (
    <div>
      {carts.map((cart, index) => (
        <ItemCart key={index} cart={cart} />
      ))}
    </div>
  );
};
export default CartList;
