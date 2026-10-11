import logo from '../assets/Logo.png'

export function Footer(){
    return(
        <footer className="main-footer">
        <div className="container">
          <div className="footer-about">
            <div className="logo-text" >
              <img src={logo} alt="" />
            </div>
            <p>A melhor loja digital a seu servico. Visite nossas paginas.</p>
            <div className="social-icons">
              <i className="fa fa-instagram"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>

          <div className="footer-col">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Termos</h4>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Criado por André Lucas</p>
        </div>
      </footer>
    )
}