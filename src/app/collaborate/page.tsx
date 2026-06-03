const collaborationThemes = [
  "旅と食の体験設計",
  "地域文化を生かしたブランド開発",
  "自然を起点にした企画編集",
  "時間の質を高める滞在プログラム",
];

export default function Collaborate() {
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

      <section className="subpage-hero collaborate-hero">
        <p className="eyebrow">Collaborate</p>
        <h1>土地の魅力を、体験へ変える。</h1>
        <p className="lead">
          自然、旅、文化、食、時間を軸に、ブランド、地域、施設、食のプロジェクトを共に形にします。
        </p>
      </section>

      <section className="collaborate-layout">
        <div className="image-placeholder collaborate-image">
          <span>Placeholder Image</span>
        </div>
        <div className="collaborate-copy">
          <p className="section-kicker">What We Create</p>
          <h2>静かな思想と、具体的な体験をつなぐ。</h2>
          <p>
            企画の初期構想から、言葉、導線、食、滞在時間の設計まで。
            AI ICHINOSEは、場所に宿る文脈を丁寧に読み、訪れる人の記憶に残る形へ編集します。
          </p>
          <ul>
            {collaborationThemes.map((theme) => (
              <li key={theme}>{theme}</li>
            ))}
          </ul>
          <a className="text-link" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </div>
      </section>
    </main>
  );
}
