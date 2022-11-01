import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);

  

  return (
    <a href="/cart">
      <img className="carrito" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="" />
      <span>{getTotalItemCount() > 0 && getTotalItemCount()}</span>
    </a>
  );
}

export default CartWidget;
