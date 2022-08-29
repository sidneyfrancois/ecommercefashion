import { Destino } from "./Destino";
import { FormaEnvio } from "./FormaEnvio/FormaEnvio";
import { Voce } from "./Voce";
//import style from ".Dados.css";

export function Dados() {
  return (
    <div>
      <Voce />
      <Destino />
      <FormaEnvio />
    </div>
  );
}
