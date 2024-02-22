import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Menu:</h1>
      <ol className="Menu">
        <Link to="/exercicio1">
          <li>Exercicio-1</li>
        </Link>
        <Link to="/exercicio2">
          <li>Exercicio-2</li>
        </Link>
        <Link to="/exercicio3">
          <li>Exercicio-3</li>
        </Link>
        <Link to="/tabelaFipe">
          <li>Tabela Fipe</li>
        </Link>
      </ol>
    </div>
  );
}

export default Home;
