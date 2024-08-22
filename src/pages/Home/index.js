import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Menu:</h1>
      <ol className="Menu">
        <Link to="/exercicio1">
          <li>Exercicio-1: Função maskify, que altera todos, exceto os últimos quatro caracteres, para "#"</li>
        </Link>
        <Link to="/exercicio2">
          <li>Exercicio-2: Editar informações</li>
        </Link>
        <Link to="/exercicio3">
          <li>Exercicio-3: Consumo API Rick e Morty</li>
        </Link>
        <Link to="/tabelaFipe">
          <li>Tabela Fipe</li>
        </Link>
      </ol>
    </div>
  );
}

export default Home;
