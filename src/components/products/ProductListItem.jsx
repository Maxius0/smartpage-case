const baseURL = "http://rapido-343-full.websrv01.smartpage.dk/";

const ProductListItem = (props) => {
  return (
    <li className="product">
      <div className="card">
        <h4>{props.product.Title}</h4>
        <img
          src={`${baseURL}${props.product.VariantInfo.Image.Value}`}
          alt={props.product.Title}
        />
        <p className="price">{props.product.Price.PriceFormatted}</p>
        <p
          dangerouslySetInnerHTML={{ __html: props.product.ShortDescription }}
        ></p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </li>
  );
};
export default ProductListItem;
