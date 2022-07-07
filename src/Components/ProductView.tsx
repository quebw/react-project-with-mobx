import { find } from "lodash";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStore } from "../Hooks/useStore";
import { IProducts } from "../store/productsStore";

export const ProductView = observer(() => {
  const {
    rootStore: { productsStore },
  } = useStore();

  const { productId } = useParams();

  const product = find(
    productsStore.getProducts,
    (p) => p.id.toString() === productId
  ) as IProducts;
  return (
    <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">{product?.title}</h2>
        <p className="lead">{product?.category}</p>
      </div>

      <div
        className="bg-light shadow-sm mx-auto"
        style={{ color: "black", padding: 10 }}
      >
        <img
          width="35%"
          height="525"
          style={{ alignSelf: "center", padding: 20 }}
          src={product?.image}
          alt="Product images"
        />
        <div>
          <b style={{ color: "red" }}>${product?.price}</b>
        </div>
        <div style={{ padding: 10 }}>{product?.description}</div>
      </div>
    </div>
  );
});
