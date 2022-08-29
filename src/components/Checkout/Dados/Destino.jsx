import styles from "./Destino.css";

export function Destino() {
  return (
    <div>
      <h2>Destino</h2>
      <div className="endereco">
        <p className="endereco-cliente">
          Plataforma lset
          <br />
          Alameda dos Jacarandás, 140
          <br />
          São Luiz - Belo Horizonte - MG
          <br />
          31275-060
        </p>

        <div className="envio-next">
          <p>Endereço para envio</p>
        </div>
      </div>
    </div>
  );
}
