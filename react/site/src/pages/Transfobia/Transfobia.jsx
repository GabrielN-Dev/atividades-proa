
import styles from './Transfobia.module.css'

const fontes = [
  {
    nome: 'Atlas da Violência 2026',
    instituicao: 'Ipea e Fórum Brasileiro de Segurança Pública',
    descricao:
      'Analisa notificações de violência registradas pelo sistema de saúde, incluindo dados sobre pessoas trans e travestis.',
    href: 'https://planejamento.es.gov.br/media/estadopresente/publicacao/atlas-da-violencia-2026.pdf',
  },
  {
    nome: 'Dossiê ANTRA 2026',
    instituicao: 'Associação Nacional de Travestis e Transexuais',
    descricao:
      'Levantamento de assassinatos e outras violências contra pessoas trans no Brasil em 2025.',
    href: 'https://antrabrasil.org/wp-content/uploads/2026/01/dossie-antra-2026.pdf',
  },
  {
    nome: 'Dados abertos do Disque 100',
    instituicao: 'Ministério dos Direitos Humanos e da Cidadania',
    descricao:
      'Registros de denúncias de violações de direitos humanos recebidas pelo canal.',
    href: 'https://www.gov.br/mdh/pt-br/acesso-a-informacao/dados-abertos/disque100',
  },
]

function SourceItem({ fonte }) {
  return (
    <a
      className={styles.source}
      href={fonte.href}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <h3>{fonte.nome}</h3>
        <p className={styles.sourceInstitution}>{fonte.instituicao}</p>
        <p>{fonte.descricao}</p>
      </div>
      <span aria-hidden="true">↗</span>
    </a>
  )
}

function Transfobia() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Identidade de gênero e direitos</p>
        <h1 className={styles.title}>
          Transfobia: quando a identidade de alguém se torna alvo de violência
        </h1>
        <p className={styles.lead}>
          Pessoas trans e travestis enfrentam discriminação em diferentes
          espaços da sociedade. Entender essa realidade exige olhar para os
          registros, reconhecer suas limitações e questionar o que ainda não
          é contabilizado.
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>O que é transfobia?</h2>
          <p>
            Transfobia é o preconceito, a discriminação e a violência
            direcionados a pessoas trans e travestis por causa de sua
            identidade ou expressão de gênero. Pode aparecer em atitudes
            individuais, práticas institucionais e barreiras que dificultam
            o acesso a direitos.
          </p>
          <p>
            Ela não se limita à agressão física. Desrespeitar o nome social,
            impedir o acesso a serviços, excluir alguém do ambiente de
            trabalho ou negar atendimento por sua identidade também são
            formas de discriminação.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Identidade de gênero não é orientação sexual</h2>
          <p>
            Identidade de gênero diz respeito a como uma pessoa reconhece
            e vivencia seu próprio gênero. Orientação sexual está relacionada
            à atração afetiva e/ou sexual.
          </p>
          <p>
            Uma pessoa trans pode ser heterossexual, homossexual, bissexual
            ou ter outra orientação. São dimensões diferentes e não devem
            ser tratadas como se fossem a mesma coisa.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Onde a discriminação aparece?</h2>
          <div className={styles.indicators}>
            <div className={styles.indicator}>
              <h3>Educação</h3>
              <p>
                Constrangimento, bullying e falta de acolhimento podem
                comprometer a permanência de estudantes trans na escola.
              </p>
            </div>
            <div className={styles.indicator}>
              <h3>Trabalho e renda</h3>
              <p>
                Preconceito em processos seletivos e no ambiente profissional
                pode restringir oportunidades e dificultar a independência
                financeira.
              </p>
            </div>
            <div className={styles.indicator}>
              <h3>Saúde</h3>
              <p>
                Desrespeito à identidade de gênero e atendimento inadequado
                podem afastar pessoas trans dos serviços de saúde.
              </p>
            </div>
            <div className={styles.indicator}>
              <h3>Espaços públicos</h3>
              <p>
                Ameaças, agressões e constrangimentos podem limitar a
                circulação e a participação social.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>O que os dados mostram?</h2>
          <p>
            O Atlas da Violência 2026, com dados do Sistema de Informação
            de Agravos de Notificação (Sinan), registrou 5.575 pessoas trans
            e travestis vítimas de violência em 2024.
          </p>

          <div className={styles.dataGrid}>
            <div className={styles.dataCard}>
              <strong>5.575</strong>
              <h3>registros de violência</h3>
              <p>
                Pessoas trans e travestis registradas como vítimas no sistema
                de saúde em 2024.
              </p>
            </div>
            <div className={styles.dataCard}>
              <strong>3.594</strong>
              <h3>mulheres trans</h3>
              <p>
                Registros de violência contra mulheres transexuais em 2024.
              </p>
            </div>
            <div className={styles.dataCard}>
              <strong>682</strong>
              <h3>travestis</h3>
              <p>
                Registros de violência contra travestis em 2024.
              </p>
            </div>
          </div>

          <p className={styles.note}>
            Fonte: Sinan/MS, conforme o Atlas da Violência 2026. Os dados de
            2023 e 2024 são preliminares e foram coletados em março de 2026.
            O levantamento não inclui casos em que a única pessoa autora da
            violência foi a própria vítima. Notificações não representam
            necessariamente todos os episódios ocorridos no país.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Violência letal: outro indicador, outra metodologia</h2>
          <p>
            No levantamento publicado em 2026, a ANTRA identificou 80
            assassinatos de pessoas trans no Brasil em 2025. Desse total,
            77 vítimas eram travestis ou mulheres trans, e três eram homens
            trans ou pessoas transmasculinas.
          </p>

          <div className={styles.dataGrid}>
            <div className={styles.dataCard}>
              <strong>80</strong>
              <h3>assassinatos em 2025</h3>
              <p>
                Casos identificados e reunidos pela ANTRA em seu levantamento
                nacional.
              </p>
            </div>
            <div className={styles.dataCard}>
              <strong>77</strong>
              <h3>travestis e mulheres trans</h3>
              <p>
                Vítimas identificadas nessas categorias no levantamento.
              </p>
            </div>
          </div>

          <p className={styles.note}>
            Fonte: Dossiê ANTRA 2026, referente a 2025. O levantamento combina
            informações de fontes públicas, registros, notícias e redes de
            apoio. A queda em relação a anos anteriores não comprova, por si
            só, uma redução real da violência: subnotificação e invisibilidade
            dos casos também afetam os números.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Por que é difícil medir essa realidade?</h2>
          <p>
            Nem todos os sistemas públicos registram identidade de gênero
            de maneira adequada. Quando essa informação não é coletada,
            preenchida ou preservada corretamente, parte da violência
            contra pessoas trans pode ficar invisível nas estatísticas.
          </p>
          <p>
            Além disso, cada levantamento possui uma finalidade e uma
            metodologia. Notificações de saúde, denúncias recebidas pelo
            Disque 100 e monitoramentos de assassinatos não são medidas
            equivalentes. Compará-los sem considerar essas diferenças
            produz conclusões equivocadas.
          </p>
        </section>

        <section className={styles.sourcesSection}>
          <h2>Fontes para aprofundar</h2>
          <p>
            Consulte os levantamentos originais e observe o período e a
            metodologia de cada pesquisa.
          </p>
          <div className={styles.sources}>
            {fontes.map((fonte) => (
              <SourceItem key={fonte.nome} fonte={fonte} />
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}

export default Transfobia
