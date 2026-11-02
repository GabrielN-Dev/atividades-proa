
import styles from './Racismo.module.css'

function Racismo() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Desigualdade e direitos</p>

        <h1 className={styles.title}>
          Racismo: quando a desigualdade tem cor
        </h1>

        <p className={styles.lead}>
          O racismo não se limita a atitudes individuais. Ele também pode
          estar presente nas estruturas e nas relações sociais, influenciando
          oportunidades, condições de vida e o acesso a direitos.
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>O que é racismo?</h2>

          <p>
            Racismo é um sistema de discriminação e desigualdade baseado em
            características raciais. Ele pode aparecer em atitudes individuais,
            práticas institucionais e estruturas sociais que produzem ou
            mantêm desvantagens para determinados grupos raciais.
          </p>

          <p>
            Por isso, compreender o racismo exige olhar além de casos isolados:
            também precisamos observar padrões de acesso à educação, ao
            trabalho, à renda, à segurança e a outros direitos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Onde observar a desigualdade?</h2>

          <p>
            Os indicadores sociais ajudam a investigar como as desigualdades
            raciais se manifestam em diferentes áreas da vida.
          </p>

          <div className={styles.indicators}>
            <article className={styles.indicator}>
              <h3>Educação</h3>
              <p>
                Acesso à escola, escolaridade, conclusão dos estudos e
                oportunidades de formação.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Trabalho e renda</h3>
              <p>
                Diferenças de rendimento, desemprego, ocupação e condições
                de trabalho.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Violência</h3>
              <p>
                Indicadores de homicídios, vitimização e exposição à violência.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Acesso a direitos</h3>
              <p>
                Diferenças no acesso à saúde, moradia, serviços públicos e
                oportunidades.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Quais fontes consultar?</h2>

          <p>
            Para investigar desigualdades raciais no Brasil, é importante
            consultar pesquisas que apresentem recortes por raça ou cor e
            expliquem seus métodos de coleta.
          </p>

          <ul className={styles.sources}>
            <li>
              <a
                href="https://www.ibge.gov.br"
                target="_blank"
                rel="noreferrer"
              >
                IBGE
              </a>
              {' — '}
              pesquisas demográficas, sociais e econômicas.
            </li>

            <li>
              <a
                href="https://forumseguranca.org.br/publicacoes/atlas-da-violencia/"
                target="_blank"
                rel="noreferrer"
              >
                Atlas da Violência
              </a>
              {' — '}
              estudos e indicadores sobre violência no Brasil.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Um cuidado ao interpretar os dados</h2>

          <p>
            Diferenças entre grupos não devem ser tratadas como características
            naturais das pessoas. É necessário investigar fatores históricos,
            sociais, econômicos e institucionais que ajudam a explicar essas
            desigualdades.
          </p>

          <p>
            Também é importante verificar o período analisado, a definição de
            raça ou cor utilizada e a metodologia da pesquisa antes de comparar
            indicadores.
          </p>
        </section>
      </div>
    </article>
  )
}

export default Racismo
