import { useCart } from "../../../contexts/CartContext";
import { Pedido } from "./Pedido";
import "./Pedidos.css";

export function Pedidos() {
  const { cartItems } = useCart();

  return (
    <div className="container-pedido">
      <h2>Seu Pedido</h2>
      <ul>
        <div className="header-products">
          <li>Produto</li>
          <li>Preço Unidade</li>
          <li>Quantidade</li>
        </div>
        {cartItems.map((item) => (
          <Pedido key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
