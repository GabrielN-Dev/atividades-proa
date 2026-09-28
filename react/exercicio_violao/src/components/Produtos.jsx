import CardProduto from "./CardProduto";
import  guitarra from '../assets/guitarrinha.jpg'

const NOME = "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE";

const violoes = [
  { id: 1, nome: NOME, preco: "R$ 989,50", imagem: guitarra },
  { id: 2, nome: NOME, preco: "R$ 989,50", imagem: guitarra },
  { id: 3, nome: NOME, preco: "R$ 989,50", imagem: guitarra },
  { id: 4, nome: NOME, preco: "R$ 989,50", imagem: guitarra },
];

function Produtos() {
  return (
    <section id="section2">
      {violoes.map((violao) => (
        <CardProduto
          key={violao.id}
          nome={violao.nome}
          preco={violao.preco}
          imagem={violao.imagem}
        />
      ))}
    </section>
  );
}

export default Produtos;