import logo from '../../assets/logo.png';

import tomate from '../../assets/topo.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abobora.png';

const cesta = {
  topo: {
    titulo: "Detalhe dos quadros",
  },
  detalhes: {
    nome: "Quadros A Venda",
    logoFazenda: logo,
    nomeFazenda: " Jack Lantern",
    descricao: "Uma Loja com quadros selecionaveis e unicos em otima qualidade",
    preco: "R$ 140,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Quadros Estilizados A Venda",
    lista: [
      {
        nome: "Quadro Rick And Mory",
        imagem: tomate,
        botao: "Comprar"
      },
            {
        nome: "Quadro GTR R34",
        imagem: brocolis,
         botao: "Comprar"
      },
      {
        nome: "Quadro GTR R35",
        imagem: batata,
         botao: "Comprar"
      },
      {
        nome: "Quadro Baby Yoda",
        imagem: pepino,
         botao: "Comprar"
      },
      {
        nome: "Quadro GTR R34 Retro",
        imagem: abobora,
         botao: "Comprar"
      }
    ]
  }
}

export default cesta;