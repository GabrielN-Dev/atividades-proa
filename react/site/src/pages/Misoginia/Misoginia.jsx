
import styles from './Misoginia.module.css'

function Misoginia() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Gênero e desigualdade</p>

        <h1 className={styles.title}>
          Misoginia: quando o desprezo se transforma em desigualdade
        </h1>

        <p className={styles.lead}>
          A misoginia vai além de ofensas individuais. Ela se manifesta
          em práticas que inferiorizam, silenciam e restringem a liberdade
          das mulheres, afetando sua participação na sociedade e o acesso
          a direitos.
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>O que é misoginia?</h2>

          <p>
            Misoginia é a aversão, o desprezo, o preconceito ou o ódio
            direcionado às mulheres e meninas. Ela pode aparecer em discursos,
            comportamentos e práticas que reforçam a ideia de inferioridade
            feminina.
          </p>

          <p>
            Suas manifestações não estão restritas à violência física.
            Humilhações, ataques à reputação, assédio, controle e tentativas
            de impedir a participação das mulheres em espaços de decisão
            também fazem parte desse problema.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Onde a desigualdade aparece?</h2>

          <p>
            Para compreender as consequências da misoginia, precisamos
            observar diferentes dimensões da vida social. Os indicadores
            não medem a misoginia diretamente, mas ajudam a investigar
            desigualdades e situações relacionadas à discriminação de gênero.
          </p>

          <div className={styles.indicators}>
            <article className={styles.indicator}>
              <h3>Violência</h3>
              <p>
                Violência psicológica, física, sexual, doméstica e feminicídio.
                É importante observar quem são as vítimas, onde ocorrem
                as agressões e a relação com os autores.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Trabalho e renda</h3>
              <p>
                Diferenças salariais, oportunidades de crescimento,
                informalidade e presença de mulheres em cargos de liderança.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Trabalho de cuidado</h3>
              <p>
                Distribuição desigual das tarefas domésticas e do cuidado
                de crianças, idosos e pessoas que precisam de assistência.
              </p>
            </article>

            <article className={styles.indicator}>
              <h3>Participação social</h3>
              <p>
                Barreiras à participação das mulheres na política,
                em instituições, no ambiente profissional e em espaços
                de tomada de decisão.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2>O que os indicadores mostram?</h2>

          <p>
            Alguns números ajudam a dimensionar desigualdades e situações
            relacionadas à vida das mulheres no Brasil.
          </p>

          <div className={styles.dataGrid}>
            <article className={styles.dataCard}>
              <strong className={styles.dataValue}>20,9%</strong>

              <h3>Diferença salarial</h3>

              <p>
                Em 2024, as mulheres recebiam, em média, 20,9% menos que
                os homens nos estabelecimentos com 100 ou mais empregados
                analisados pelo Relatório de Transparência Salarial.
              </p>
            </article>

            <article className={styles.dataCard}>
              <strong className={styles.dataValue}>155.111</strong>

              <h3>Denúncias de violência</h3>

              <p>
                O Ligue 180 registrou esse total de denúncias em 2025,
                um aumento de 17,4% em relação a 2024.
              </p>
            </article>

            <article className={styles.dataCard}>
              <strong className={styles.dataValue}>21,6 h</strong>

              <h3>Trabalho doméstico e cuidado</h3>

              <p>
                Em 2022, mulheres dedicaram, em média, 21,6 horas semanais
                a essas atividades, contra 11,8 horas dos homens.
              </p>
            </article>
          </div>

          <p className={styles.note}>
            Os indicadores têm períodos, populações e metodologias diferentes.
            Eles não devem ser comparados diretamente nem interpretados como
            uma medida única de misoginia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Como interpretar esses dados?</h2>

          <p>
            O aumento das denúncias não significa necessariamente que a
            violência cresceu na mesma proporção. Ele também pode estar
            relacionado ao maior conhecimento sobre os canais de atendimento,
            à confiança nas instituições e às mudanças nos registros.
          </p>

          <p>
            Da mesma forma, a diferença salarial apresentada não representa
            todas as trabalhadoras e todos os trabalhadores brasileiros:
            o levantamento considera estabelecimentos com 100 ou mais
            empregados.
          </p>

          <p>
            Para interpretar os indicadores corretamente, é necessário
            verificar o período, a população analisada, a metodologia e
            as limitações de cada levantamento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Fontes para aprofundamento</h2>

          <ul className={styles.sources}>
            <li>
              <a
                href="https://www.gov.br/mulheres/pt-br/central-de-conteudos/publicacoes/RelatrioCompletoEstratgiasdiscursivasemonetizaodamisoginianoYouTube.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Ministério das Mulheres — Misoginia e Violência Contra as Mulheres
              </a>
              {' — '}
              estudo sobre manifestações e disseminação da misoginia.
            </li>

            <li>
              <a
                href="https://www.gov.br/mulheres/pt-br/central-de-conteudos/noticias/2026/abril/canal-ligue-180-registra-crescimento-de-27-nas-denuncias-e-10-nos-atendimentos-no-primeiro-trimestre-de-2026"
                target="_blank"
                rel="noreferrer"
              >
                Ministério das Mulheres — Balanço do Ligue 180
              </a>
              {' — '}
              registros de atendimento e denúncias de violência em 2025.
            </li>

            <li>
              <a
                href="https://www.gov.br/mulheres/pt-br/central-de-conteudos/noticias/2025/abril/3o-relatorio-de-transparencia-salarial-mulheres-recebem-20-9-a-menos-do-que-os-homens"
                target="_blank"
                rel="noreferrer"
              >
                Ministério das Mulheres — Relatório de Transparência Salarial
              </a>
              {' — '}
              dados da RAIS de 2024.
            </li>

            <li>
              <a
                href="https://www.gov.br/mds/pt-br/acoes-e-programas/brasil-que-cuida/observatorio-do-cuidado/datacuidado/datacuidados/"
                target="_blank"
                rel="noreferrer"
              >
                Ministério do Desenvolvimento e Assistência Social — DataCuidados
              </a>
              {' — '}
              indicadores sobre trabalho doméstico e cuidado não remunerado.
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}

export default Misoginia
