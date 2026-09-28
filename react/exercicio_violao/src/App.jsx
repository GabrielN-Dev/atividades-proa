import Header from "./components/Header";
import NossaLoja from "./components/NossaLoja";
import Produtos from "./components/Produtos";
import Localizacao from "./components/Localizacao";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <NossaLoja />
      <Produtos />
      <Localizacao />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;