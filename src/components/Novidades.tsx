import { useState } from "react";

export function Novidades(){
      const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
    return(
              <section className="newsletter-section">
        <div className="container">
          <div className="news-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className="news-form" onSubmit={(e) => { e.preventDefault(); setNewsletterSubscribed(true); }}>
            <div className="inputs-row">
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <button type="submit">INSCREVER</button>
            </div>
            <div className="terms-row">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>
            {newsletterSubscribed && (
              <p style={{ color: '#FFD700', fontSize: '12px', marginTop: '4px' }}>Inscrição realizada com sucesso!</p>
            )}
          </form>
        </div>
      </section>
    )
}