import { Dados } from "../components/Checkout/Dados/Dados";
import { Pedidos } from "../components/Checkout/Pedido/Pedidos";
import "./Checkout.css";

export function Checkout() {
  return (
    <div className="container-frete">
      <Pedidos />
      <Dados />
    </div>
  );
}
