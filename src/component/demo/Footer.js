const Footer = (props) => {
  const { totalPrice, deleteCarts } = props;
  return (
    <footer>
      <hr />
      <div className="cart-total">
        <h4>
          total <span>{totalPrice}</span>
        </h4>
      </div>
      <button onClick={() => deleteCarts()} className="btn clear-btn">
        clear cart
      </button>
    </footer>
  );
};
export default Footer;
