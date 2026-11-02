
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.wordmark}>
        Impacto em Dados
      </Link>

      <nav className={styles.navigation} aria-label="Navegação principal">
        <Link to="/#temas">Temas</Link>
        <Link to="/#criterio">Como funciona</Link>
        <Link to="/#fontes">Fontes</Link>
      </nav>
    </header>
  )
}

export default Header
