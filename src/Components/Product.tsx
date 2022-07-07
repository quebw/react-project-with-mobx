import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { IProducts } from "../store/productsStore";

interface IProps {
  product: IProducts;
}

export const Product = observer((props: IProps) => {
  return (
    <div >
      <div className="col">
        <div className="card shadow-sm" style={{ height: 400 }}>
          <img
            width="45%"
            height="225"
            style={{ alignSelf: "center", paddingTop: "15px" }}
            src={props.product.image}
            alt="Product images"
          />

          <div className="card-body">
            <p className="card-text">{props.product.title}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link
                  // eslint-disable-next-line no-template-curly-in-string
                  to={`/products/${props.product.id}`}
                  className="btn btn-outline-danger me-2"
                >
                  View
                </Link>
              </div>
              <b>${props.product.price}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
