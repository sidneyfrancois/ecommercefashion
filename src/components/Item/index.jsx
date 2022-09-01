import roupaImg from "../../assets/blazer.jpg";
import { useCart } from "../../contexts/CartContext";
import "./item.css";

export function Item({ item }) {
  const { addCartItem } = useCart();
  const img = `src/assets/${item.image}.jpg`;

  return (
    <div className="item-container">
      <img src={img} className="imagem-roupa" />
      <div className="titulo">{item.name}</div>
      <div>{item.price}</div>
      <button onClick={() => addCartItem(item)}>Adicionar ao carrinho</button>
    </div>
  );
}
