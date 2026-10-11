import { useState } from 'react';
import { Icons } from './Icones';

interface HeaderProps {
  cartCount: number;
  logoSrc: string;
}

export function Header({ cartCount, logoSrc }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="header-topbar">
        <div className="container topbar-container">
          <div className="topbar-item">
            <Icons.Shield />
            <p>Compra<span> 100% segura</span></p>
          </div>
          <div className="topbar-item">
            <Icons.Truck />
            <p><span>Frete grátis</span> acima de R$ 200</p>
          </div>
          <div className="topbar-item">
            <Icons.CreditCard />
            <p><span>Parcele</span> suas compras</p>
          </div>
        </div>
      </header>

      <header className="main-header">
        <div className="container main-header-container">
          
          {/* Botão de Hambúrguer (Apenas abre o menu) */}
          <button className="hamburger-btn" onClick={toggleMenu} aria-label="Abrir Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          <a href="#" className="logo">
            <img src={logoSrc} alt="Econverse Logo" />
          </a>

          <div className="search-box">
            <input type="text" placeholder="O que você está procurando?" />
            <button aria-label="Buscar">
              <Icons.Search />
            </button>
          </div>

          <div className="header-actions">
            <button className="action-btn desktop-only" title="Meus Pedidos">
              <Icons.Box />
            </button>
            <button className="action-btn desktop-only" title="Favoritos">
              <Icons.Heart />
            </button>
            <button className="action-btn desktop-only" title="Minha Conta">
              <Icons.User />
            </button>
            <button className="action-btn" title="Carrinho">
              <Icons.Cart />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Gaveta do menu mobile com o botão "X" incorporado no topo */}
        <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <h3>Categorias & Menu</h3>
            <button className="close-menu-btn" onClick={toggleMenu} aria-label="Fechar Menu">
              ✕
            </button>
          </div>

          <div className="mobile-menu-content">
            <ul>
              <li><a href="#" onClick={toggleMenu}>Tecnologia</a></li>
              <li><a href="#" onClick={toggleMenu}>Supermercado</a></li>
              <li><a href="#" onClick={toggleMenu}>Bebidas</a></li>
              <li><a href="#" onClick={toggleMenu}>Ferramentas</a></li>
              <li><a href="#" onClick={toggleMenu}>Saúde</a></li>
              <li><a href="#" onClick={toggleMenu}>Esportes e Fitness</a></li>
              <li><a href="#" onClick={toggleMenu}>Moda</a></li>
            </ul>
            <div className="mobile-menu-actions">
              <a href="#" onClick={toggleMenu}><Icons.Box /> Meus Pedidos</a>
              <a href="#" onClick={toggleMenu}><Icons.Heart /> Favoritos</a>
              <a href="#" onClick={toggleMenu}><Icons.User /> Minha Conta</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}