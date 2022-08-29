import { useState } from "react";
import { OpcoesEnvio } from "./OpcoesEnvio";
import "./FormaEnvio.css";

export function FormaEnvio() {
  const [opcoes, setOpcoes] = useState([
    [
      { id: 1, descricao: "Retirada no Local", price: "Grátis", detalhes: "" },
      { id: 2, descricao: "Frete Grátis", price: "Grátis", detalhes: "" },
    ],
    [
      { id: 3, descricao: "Motoboy", price: "15,00", detalhes: "" },
      {
        id: 4,
        descricao: "Retirar Próximo ao meu endereço",
        price: "20,70",
        detalhes: "Previsão: 4 dias úteis",
      },
    ],
    [
      {
        id: 5,
        descricao: "PAC",
        price: "32,20",
        detalhes: "Previsão: 3 dias úteis",
      },
      {
        id: 6,
        descricao: "Package",
        price: "39,52",
        detalhes: "Previsão: 4 dias úteis",
      },
    ],
  ]);

  return (
    <>
      <h1>Forma de envio</h1>
      <div className="envio-form">
        <div className="entrega-selection">
          <table>
            {opcoes.map((row) => (
              <tr>
                {row.map((col) => (
                  <OpcoesEnvio
                    className="opcao-envio"
                    key={col.id}
                    envio={col}
                  />
                ))}
              </tr>
            ))}
          </table>
          <div className="prazo-aviso">
            <p>Prazo de entrega dos Correios é de cinco dias após a postagem</p>
          </div>
          <div className="observacoes">
            <h4>Observações</h4>
            <textarea
              name="observação"
              cols="60"
              rows="4"
              placeholder="Adicione alguma informação adicional relacionada ao seu pedido"
            ></textarea>
          </div>
          <a
            className="opcao-voltar"
            href="/CarrinhoDeCompraAberto/carrinhoDeCompra.html"
          >
            Voltar para o carrinho
          </a>
        </div>
      </div>
    </>
  );
}
