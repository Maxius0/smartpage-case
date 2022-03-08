const baseURL = "http://rapido-343-full.websrv01.smartpage.dk/";

const CartListItem = (props) => {
  return (
    <li className="line">
      <span>{props.line.ProductName}</span>
      <span id="quantity">{props.line.Quantity}</span>
      <span id="price">{props.line.Price.PriceFormatted}</span>
    </li>
  );
};
export default CartListItem;
