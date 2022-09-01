import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { Item } from "../Item";
import "./listItems.css";

export function ListItems() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Blazer Branco",
      price: "179,90",
      quantity: 0,
      image: "blazer",
    },
    {
      id: 2,
      name: "Bolsa de Couro",
      price: "190,90",
      quantity: 0,
      image: "bolsaCouro",
    },
    {
      id: 3,
      name: "Bolsa Fendi",
      price: "3.199,90",
      quantity: 0,
      image: "bolsaFendi",
    },
    { id: 4, name: "Blazer", price: "179,90", quantity: 0, image: "blazer" },
    {
      id: 5,
      name: "Bolsa",
      price: "190,90",
      quantity: 0,
      image: "bolsaVermelha",
    },
    {
      id: 6,
      name: "Vestido",
      price: "3.199,90",
      quantity: 0,
      image: "vestidoBranco",
    },
    { id: 7, name: "Tênis", price: "179,90", quantity: 0, image: "tenis" },
    { id: 8, name: "Jaqueta", price: "190,90", quantity: 0, image: "jaqueta" },
    {
      id: 9,
      name: "Vestido Florido",
      price: "3.199,90",
      quantity: 0,
      image: "vestidoFlorido",
    },
  ]);

  return (
    <div className="all-container">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
