import "./OpcoesEnvio.css";

export function OpcoesEnvio({ envio }) {
  return (
    <th>
      <div className="opcao-envio">
        <input type="radio" name="entrega-option" value="retirada-local" />
        <div class="opcao-descricao">
          <label>
            <p>{envio.descricao}</p>
            <p className="sub-descricao">{envio.detalhes}</p>
          </label>
          <label>{envio.price}</label>
        </div>
      </div>
    </th>
  );
}
