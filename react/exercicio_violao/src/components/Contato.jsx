import whats from '../assets//whats.png'
import insta from '../assets/insta.png'
import face from '../assets/face.png'


function Contato() {
  
  return (
    <section id="section4">
      <div id="cadastro">
        <form action="">
          <fieldset>
            <label>Entre com o seu nome:</label>
            <input
              type="text"
              name="nome_usuario"
              size="30"
              maxLength="30"
              required
              placeholder="Digite seu nome aqui:"
            />
            <label>Entre com o seu e-mail:</label>
            <input
              type="email"
              name="email_usuario"
              size="30"
              maxLength="30"
              required
              placeholder="Digite seu email aqui:"
            />
            <label>Faça seu pedido:</label>
            <textarea
              name="pedido_usuario"
              cols="30"
              rows="5"
              placeholder="Faça seu pedido por aqui:"
            ></textarea>
            <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      </div>
      <div id="rede_social">
        <h2>Acesse também nossas redes sociais:</h2>
        <div>
          <img src={whats} alt="logo do whatsapp" />
          <img src={insta} alt="logo do instagram" />
          <img src={face} alt="logo do facebook" />
        </div>
      </div>
    </section>
  );
}

export default Contato;