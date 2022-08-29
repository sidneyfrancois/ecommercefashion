import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

export function ListItems() {
  const { addCartItem } = useCart();
  const [items, setItems] = useState([
    { id: 1, name: "Blazer Branco", price: "179,90", quantity: 0 },
    { id: 2, name: "Bolsa de Couro", price: "190,90", quantity: 0 },
    { id: 3, name: "Bolsa Fendi", price: "3.199,90", quantity: 0 },
    { id: 4, name: "Blazer", price: "179,90", quantity: 0 },
    { id: 5, name: "Bolsa", price: "190,90", quantity: 0 },
    { id: 6, name: "Vestido", price: "3.199,90", quantity: 0 },
    { id: 7, name: "Calça", price: "179,90", quantity: 0 },
    { id: 8, name: "Jaqueta", price: "190,90", quantity: 0 },
    { id: 9, name: "Saia", price: "3.199,90", quantity: 0 },
  ]);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <br />
            <button onClick={() => addCartItem(item)}>Adicionar item</button>
          </li>
        ))}
      </ul>
    </>
  );
}
