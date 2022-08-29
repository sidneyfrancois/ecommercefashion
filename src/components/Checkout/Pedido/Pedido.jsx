import "./Pedido.css";

export function Pedido({ item }) {
  return (
    <li>
      <div className="container-item">
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.quantity}</div>
      </div>
    </li>
  );
}
