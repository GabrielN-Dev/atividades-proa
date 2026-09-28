import whats from '../assets//whats.png'
import insta from '../assets/insta.png'
import face from '../assets/face.png'


function Footer() {
  return (
    <footer>
      <h3>Nossa Loja - Instrumentos Musicais</h3>
      <p>Rua Tito,54 - Lapa</p>
      <p>São Paulo - Brasil</p>
      <img src={whats} alt="logo do whatsapp" />
      <img src={insta} alt="logo do instagram" />
      <img src={face} alt="logo do facebook" />
    </footer>
  );
}

export default Footer;