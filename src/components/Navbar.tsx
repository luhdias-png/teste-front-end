import {Icons} from '../components/Icones'

export function Navbar() {
  return (
    <nav className="category-nav">
      <div className="container">
        <a href="#" className="nav-item">Todas Categorias</a>
        <a href="#" className="nav-item">Supermercado</a>
        <a href="#" className="nav-item">Livros</a>
        <a href="#" className="nav-item">Moda</a>
        <a href="#" className="nav-item">Lançamentos</a>
        <a href="#" className="nav-item highlight">Ofertas do Dia</a>
        <a href="#" className="nav-item"><Icons.Crown />
          Assinatura
        </a>
      </div>
    </nav>
  );
}