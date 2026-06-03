const archive = [
  { place: "Market / noon", note: "fruit, spice, voices", image: "market" },
  { place: "Vineyard / dusk", note: "slow light", image: "vineyard" },
  { place: "Sea / 05:42", note: "before names", image: "sea" },
  { place: "Market / rain", note: "green silence", image: "market" },
  { place: "Vineyard / north", note: "passing light", image: "vineyard" },
  { place: "Shore / wind", note: "unwritten value", image: "sea" },
];

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header minimal" aria-label="Site header">
        <a className="brand" href="/" aria-label="AI ICHINOSE home">
          AI ICHINOSE
        </a>
        <nav aria-label="Primary navigation">
          <a href="/journal">Journal</a>
          <a href="/collaborate">Collaborate</a>
        </nav>
      </header>

      <section className="kinfolk-hero" aria-labelledby="hero-title">
        <div className="sea-placeholder" aria-hidden="true" />
        <div className="hero-words">
          <h1 id="hero-title">AI ICHINOSE</h1>
          <p>Chef / Explorer</p>
          <p>
            自然の中には、
            <br />
            まだ名前の付いていない価値がある。
          </p>
        </div>
      </section>

      <section className="quiet-section philosophy" aria-labelledby="philosophy-title">
        <p className="folio">01 / Philosophy</p>
        <h2 id="philosophy-title">
          旅、自然、文化、時間を、
          <br />
          料理で再編集する。
        </h2>
        <p>
          風の湿度、火の温度、食卓の沈黙。価値はいつも、名前を持つ前にそこにある。
        </p>
      </section>

      <section className="image-essay travel-gastronomy" aria-labelledby="travel-title">
        <div className="essay-image ocean" aria-hidden="true" />
        <div className="essay-copy">
          <p className="folio">02 / Travel Gastronomy</p>
          <h2 id="travel-title">旅は、最後に味として残る。</h2>
          <p>
            市場、海、葡萄畑。土地の記憶は、香りと温度になって身体へ入ってくる。
          </p>
        </div>
      </section>

      <section className="manifesto-book" aria-labelledby="manifesto-title">
        <p className="folio">03 / Manifesto</p>
        <h2 id="manifesto-title">
          説明しすぎないこと。
          <br />
          すぐに答えにしないこと。
          <br />
          自然の速度で、価値を待つこと。
        </h2>
      </section>

      <section className="lab-spread" aria-labelledby="soluna-title">
        <div>
          <p className="folio">04 / SOLUNA LAB</p>
          <h2 id="soluna-title">火、水、土、発酵。</h2>
        </div>
        <div className="lab-notes">
          <p>
            レシピではなく、土地の記憶を扱う。発酵、熟成、観察のための静かな実験室。
          </p>
          <div className="lab-images" aria-label="SOLUNA LAB archive images">
            <div className="archive-photo tall lab-fermentation"><span>fermentation</span></div>
            <div className="archive-photo lab-aging"><span>aging</span></div>
            <div className="archive-photo lab-research"><span>research</span></div>
          </div>
        </div>
      </section>

      <section className="background-archive" aria-labelledby="background-title">
        <div className="background-image archive-photo"><span>field record</span></div>
        <div>
          <p className="folio">05 / Background</p>
          <h2 id="background-title">料理人であり、観察者である。</h2>
          <p>
            旅先で見つけた自然と文化を、食の体験へ変換する。時間を味わうためのアーカイブ。
          </p>
        </div>
      </section>

      <section className="photo-archive" aria-labelledby="archive-title">
        <div className="archive-heading">
          <p className="folio">06 / Journal Preview</p>
          <h2 id="archive-title">A quiet archive of travel, food, and time.</h2>
        </div>
        <div className="archive-grid">
          {archive.map((item, index) => (
            <a className="archive-item" href="/journal" key={item.place}>
              <div className={`archive-photo tone-${index + 1} travel-${item.image}`} />
              <p>{item.place}</p>
              <span>{item.note}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="closing-invitation" aria-labelledby="collaborate-title">
        <p className="folio">07 / Collaborate</p>
        <h2 id="collaborate-title">
          土地のまだ見えない価値を、
          <br />
          ひとつの体験へ。
        </h2>
        <a href="/collaborate">Collaborate</a>
      </section>

      <footer className="footer minimal-footer">
        <p>AI ICHINOSE</p>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </footer>
    </main>
  );
}
