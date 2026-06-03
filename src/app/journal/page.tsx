const entries = [
  {
    category: "Field Note",
    title: "森の朝に、時間の密度を測る",
    excerpt:
      "自然の中で感じる温度、湿度、音の層。旅のはじまりにある静けさを記録します。",
  },
  {
    category: "Culture",
    title: "古い街の食卓から文化を読む",
    excerpt:
      "器、素材、会話、しつらえ。食のまわりにある文化の輪郭を拾い集めます。",
  },
  {
    category: "Journey",
    title: "移動することと、立ち止まること",
    excerpt:
      "旅は目的地だけではなく、余白の中に残る感覚そのものでもあります。",
  },
];

export default function Journal() {
  return (
    <main>
      <header className="site-header" aria-label="Site header">
        <a className="brand" href="/" aria-label="AI ICHINOSE home">
          AI ICHINOSE
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/journal">Journal</a>
          <a href="/collaborate">Collaborate</a>
        </nav>
      </header>

      <section className="subpage-hero">
        <p className="eyebrow">Journal</p>
        <h1>記憶を、時間の層として残す。</h1>
        <p className="lead">
          自然、旅、文化、食の断片を、AI ICHINOSEの視点で静かに記録していきます。
        </p>
      </section>

      <section className="article-list" aria-label="Journal entries">
        {entries.map((entry) => (
          <article className="article-row" key={entry.title}>
            <div className="article-image" aria-hidden="true">
              <span>{entry.category}</span>
            </div>
            <div>
              <p className="section-kicker">{entry.category}</p>
              <h2>{entry.title}</h2>
              <p>{entry.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
