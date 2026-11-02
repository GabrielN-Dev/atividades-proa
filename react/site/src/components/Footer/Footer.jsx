
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.identity}>
        <p className={styles.name}>Impacto em Dados</p>
        <p>Informação pública, leitura crítica e conscientização.</p>
      </div>

      <p className={styles.copyright}>
        Projeto educativo, Brasil, 2026.
      </p>
    </footer>
  )
}

export default Footer
