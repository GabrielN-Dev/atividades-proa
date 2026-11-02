
import styles from './Homofobia.module.css'

function Homofobia() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Orientação sexual e direitos</p>

        <h1 className={styles.title}>
          Homofobia: quando a orientação sexual se torna alvo de preconceito
        </h1>

        <p className={styles.lead}>
          A homofobia se manifesta em atitudes, discursos e práticas que
          discriminam pessoas homossexuais. Seus efeitos podem aparecer
          nas relações familiares, na escola, no trabalho, nos serviços
          públicos e em outros espaços da sociedade.
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>O que é homofobia?</h2>

          <p>
            Homofobia é o preconceito, a discriminação, a aversão ou a
            hostilidade direcionada a pessoas homossexuais. Pode aparecer
            em agressões físicas e verbais, ameaças, exclusão social,
            constrangimentos e tratamento desigual.
          </p>

          <p>
            Essas práticas podem ocorrer tanto em atitudes individuais
            quanto em ambientes e instituições. Por isso, compreender
            a homofobia exige observar não apenas episódios explícitos
            de violência, mas também barreiras que limitam a participação
            e o acesso a direitos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Orientação sexual não é identidade de gênero</h2>

          <p>
            Orientação sexual diz respeito à atração afetiva, romântica
            ou sexual de uma pessoa. Identidade de gênero diz respeito
            à forma como ela reconhece e vivencia seu próprio gênero.
          </p>

          <p>
            Uma pessoa homossexual pode ser cisgênero ou transgênero.
            Homofobia e transfobia são formas distintas de discriminação,
            embora possam atingir a mesma pessoa.
          </p>

          <p>
            Também é importante não confundir homofobia com bifobia:
            pessoas bissexuais podem sofrer discriminação relacionada
            especificamente à sua orientação sexual.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Onde a discriminação aparece?</h2>

          <p>
            A violência e a discriminação podem ocorrer em diferentes
            contextos. Observar esses ambientes ajuda a compreender
            como o preconceito interfere na vida cotidiana.
          </p>

          <div className={styles.indicators}>
            <article className={styles.indicator}>
              <h3>Família</h3>
              <p>
                Rejeição, ameaças, humilhações e rompimento de vínculos
                em razão da orientação sexual.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Escola</h3>
              <p>
                Bullying, intimidação, isolamento e dificuldades para
                estudar em ambientes seguros e acolhedores.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Trabalho</h3>
              <p>
                Assédio, tratamento desigual, constrangimentos e barreiras
                à permanência e ao desenvolvimento profissional.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Espaços públicos</h3>
              <p>
                Ameaças, agressões, constrangimentos e restrições à
                liberdade de expressão e convivência.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2>O que os registros mostram?</h2>

          <p>
            O Atlas da Violência 2026 analisou registros do Sistema de
            Informação de Agravos de Notificação (Sinan), do Ministério
            da Saúde, sobre violência interpessoal contra pessoas
            homossexuais e bissexuais.
          </p>

          <div className={styles.dataGrid}>
            <article className={styles.dataCard}>
              <strong className={styles.dataValue}>10.250</strong>

              <h3>Registros em 2024</h3>

              <p>
                Casos de violência registrados contra pessoas homossexuais
                e bissexuais no Brasil.
              </p>
            </article>

            <article className={styles.dataCard}>
              <strong className={styles.dataValue}>7.378</strong>

              <h3>Pessoas homossexuais</h3>

              <p>
                Registros de violência contra pessoas homossexuais em 2024.
              </p>
            </article>

            <article className={styles.dataCard}>
              <strong className={styles.dataValue}>2.872</strong>

              <h3>Pessoas bissexuais</h3>

              <p>
                Registros de violência contra pessoas bissexuais em 2024.
              </p>
            </article>
          </div>

          <p className={styles.note}>
            O total de 10.250 reúne os dois grupos. Os registros não
            comprovam, por si só, que todos os episódios tiveram motivação
            homofóbica ou bifóbica.
          </p>
        </section>

        <section className={styles.section}>
          <h2>O que mudou nos registros?</h2>

          <p>
            Entre 2023 e 2024, o total de registros de violência contra
            pessoas homossexuais e bissexuais passou de 9.718 para 10.250,
            uma variação de 5,5%.
          </p>

          <p>
            Ao longo da série de 2015 a 2024, foram registrados 59.790
            casos contra esses dois grupos. O crescimento dos registros
            precisa ser interpretado com cautela: pode refletir aumento
            da violência, maior identificação das pessoas nos serviços
            de saúde e melhorias na notificação.
          </p>

          <p>
            Portanto, não é correto afirmar que a violência aumentou
            exatamente 5,5% apenas com base nessa comparação.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Fontes para aprofundamento</h2>

          <ul className={styles.sources}>
            <li>
              <a
                href="https://forumseguranca.org.br/wp-content/uploads/2026/05/atlas-violencia-2026-relatorio-completo.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Atlas da Violência 2026 — Ipea e FBSP
              </a>
              {' — '}
              capítulo 7: violência contra a população LGBTQIAPN+.
            </li>

            <li>
              <a
                href="https://www.gov.br/mdh/pt-br/acesso-a-informacao/dados-abertos/disque100"
                target="_blank"
                rel="noreferrer"
              >
                Disque 100 — Dados abertos
              </a>
              {' — '}
              registros de denúncias de violações de direitos humanos.
            </li>

            <li>
              <a
                href="https://www.ibge.gov.br/estatisticas/sociais/saude/9160-pesquisa-nacional-de-saude.html"
                target="_blank"
                rel="noreferrer"
              >
                IBGE — Pesquisa Nacional de Saúde
              </a>
              {' — '}
              dados experimentais de orientação sexual autoidentificada
              da população adulta em 2019.
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}

export default Homofobia
