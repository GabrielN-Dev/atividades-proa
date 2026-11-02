
import { Link } from 'react-router-dom'
import temas from '../../data/temas'
import fontes from '../../data/fontes'

const passos = [
  {
    titulo: 'Identifique a fonte',
    texto:
      'Quem produziu o dado? Um órgão do governo, uma pesquisa ou uma organização da sociedade civil? Cada um coleta de um jeito e com um objetivo.',
  },
  {
    titulo: 'Verifique o período',
    texto:
      'Confira o ano ou o intervalo de tempo. Comparar números de períodos diferentes, ou de métodos diferentes, leva a conclusões erradas.',
  },
  {
    titulo: 'Entenda o que foi contado',
    texto:
      'Uma denúncia não é o mesmo que um caso confirmado. Muitos registros mostram o que chegou até as instituições, não tudo o que aconteceu.',
  },
]

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-titulo">
      <div className="hero-main">
        <h1 id="hero-titulo">Discriminação não é abstrata.</h1>

        <p className="hero-lead">
          Ela aparece nas oportunidades negadas, na violência e no acesso
          desigual a direitos. O Impacto em Dados reúne indicadores e fontes
          públicas para ajudar você a entender como a discriminação acontece
          no Brasil.
        </p>

        <div className="hero-actions">
          <a className="button" href="#temas">
            Explorar os temas
          </a>
          <a className="text-link" href="#criterio">
            Como ler os dados
          </a>
        </div>
      </div>

      <aside className="hero-aside" aria-labelledby="aside-titulo">
        <h2 id="aside-titulo">O que você encontra aqui</h2>
        <ul>
          <li>Quatro temas: racismo, misoginia, homofobia e transfobia.</li>
          <li>Dados de fontes públicas, sempre com o link de origem.</li>
          <li>Um guia para ler indicadores sem tirar conclusões erradas.</li>
        </ul>
      </aside>
    </section>
  )
}

function TopicCard({ tema }) {
  return (
    <article className="topic-card">
      <h3>{tema.nome}</h3>
      <p className="topic-description">{tema.descricao}</p>
      <p className="topic-question">{tema.pergunta}</p>
      <Link className="text-link" to={`/${tema.id}`}>
        Ver {tema.nome.toLowerCase()}
      </Link>
    </article>
  )
}

function TopicsSection() {
  return (
    <section className="topics-section" id="temas" aria-labelledby="temas-titulo">
      <div className="section-heading">
        <h2 id="temas-titulo">Escolha um tema para começar</h2>
        <p>
          Cada tema reúne os conceitos principais, os dados disponíveis e as
          fontes para você se aprofundar.
        </p>
      </div>

      <div className="topics-grid">
        {temas.map((tema) => (
          <TopicCard key={tema.id} tema={tema} />
        ))}
      </div>
    </section>
  )
}

function ReadingSection() {
  return (
    <section className="reading-section" id="criterio" aria-labelledby="criterio-titulo">
      <div className="reading-intro">
        <h2 id="criterio-titulo">Um número precisa de contexto</h2>

        <p>
          Um indicador, sozinho, não explica uma realidade. Para interpretar
          os dados, é preciso saber de onde vieram, quando foram coletados e o
          que realmente representam.
        </p>

        <p className="reading-example">
          <strong>Exemplo:</strong> se as denúncias de um tipo de violência
          aumentaram, a violência pode ter crescido, ou mais pessoas passaram
          a denunciar. Só o contexto mostra a diferença.
        </p>
      </div>

      <ol className="reading-steps">
        {passos.map((passo) => (
          <li key={passo.titulo}>
            <h3>{passo.titulo}</h3>
            <p>{passo.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function SourceItem({ fonte }) {
  return (
    <li>
      <a href={fonte.href} target="_blank" rel="noreferrer">
        <span className="source-name">{fonte.nome}</span>
        <span className="source-institution">{fonte.instituicao}</span>
        <span className="source-description">{fonte.descricao}</span>
        <span className="visually-hidden"> (abre em uma nova aba)</span>
      </a>
    </li>
  )
}

function SourcesSection() {
  return (
    <section className="sources-section" id="fontes" aria-labelledby="fontes-titulo">
      <div className="sources-intro">
        <h2 id="fontes-titulo">Informação com origem</h2>
        <p>
          Consulte bases públicas e estudos que ajudam a investigar a
          violência, a desigualdade e os direitos humanos no Brasil.
        </p>
      </div>

      <ul className="sources-list">
        {fontes.map((fonte) => (
          <SourceItem key={fonte.nome} fonte={fonte} />
        ))}
      </ul>
    </section>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <TopicsSection />
      <ReadingSection />
      <SourcesSection />
    </>
  )
}

export default Home
