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
          自然を観察し、
          <br />
          文化を記録する。
        </h2>
        <p>
          風の湿度、土の匂い、水の流れ、火の余韻。
          <br />
          <br />
          価値はいつも、
          <br />
          名前を与えられる前から、
          <br />
          その土地の風景の中に静かに息づいている。
          <br />
          <br />
          私が記録したいのは、
          <br />
          目に見える結果ではなく、
          <br />
          その奥でゆっくり育まれている時間そのものです。
        </p>
      </section>

      <section className="image-essay travel-gastronomy" aria-labelledby="travel-title">
        <div className="essay-image ocean" aria-hidden="true" />
        <div className="essay-copy">
          <p className="folio">02 / Travel Gastronomy</p>
          <h2 id="travel-title">旅は、味として残る。</h2>
          <p>
            市場、海、葡萄畑。
            <br />
            <br />
            旅先で出会う風景は、
            <br />
            やがて香りとなり、温度となり、
            <br />
            ひとつの体験へと姿を変える。
            <br />
            <br />
            旅は記憶として残るのではなく、
            <br />
            最後には味として身体の中に残っていく。
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
          <br />
          自然がそうであるように、
          <br />
          価値にもまた育つ時間がある。
          <br />
          <br />
          待つこと。
          <br />
          観察すること。
          <br />
          耳を澄ますこと。
          <br />
          <br />
          その先にしか見えないものがある。
        </h2>
      </section>

      <section className="lab-spread" aria-labelledby="soluna-title">
        <div>
          <p className="folio">04 / SOLUNA LAB</p>
          <h2 id="soluna-title">Fire, water, soil, fermentation.</h2>
        </div>
        <div className="lab-notes">
          <p>
            レシピではなく、土地の記憶を扱うための観察記録。
          </p>
          <div className="lab-images" aria-label="SOLUNA LAB archive images">
            <div className="archive-photo tall lab-fermentation"><span>fermentation</span></div>
            <div className="archive-photo lab-aging"><span>aging</span></div>
            <div className="archive-photo lab-research"><span>research</span></div>
          </div>
        </div>
      </section>

      <section className="background-archive" aria-labelledby="background-title">
        <div className="background-image archive-photo"><span>production archive</span></div>
        <div>
          <p className="folio">05 / Background</p>
          <h2 id="background-title">
            料理人であり、
            <br />
            観察者である。
          </h2>
          <p>
            旅先で出会う自然や文化、
            <br />
            土地に息づく記憶や技術。
            <br />
            <br />
            それらを料理へ翻訳するために、
            <br />
            私は観察し、記録し続けている。
            <br />
            <br />
            料理は表現ではなく、
            <br />
            土地と時間のアーカイブである。
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
