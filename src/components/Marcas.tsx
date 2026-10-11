import logo from '../assets/Logo.png'

export function Marcas(){
    return(
        <section className="brands-section">
        <h2>Navegue por marcas</h2>
        <div className="brands-grid">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="brand-circle">
              <div className="brand-logot">
                <img src={logo} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}