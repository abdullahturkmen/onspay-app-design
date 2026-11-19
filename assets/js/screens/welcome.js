import { mountStory } from "../components/story.js";

export default {
  id: "welcome",
  group: "Başlangıç",
  thumb: "dark",
  title: "Hoş geldin",
  subtitle: "Başlangıç",
  detailTitle: "İlk izlenim",
  description:
    "Üç kısa tanıtım karesi hikaye gibi kendiliğinden ilerler. Sağa dokununca ileri, sola dokununca geri gidilir, basılı tutunca durur.",
  flow: "İlk kullanım",
  interaction: "Dokun: ileri/geri · Basılı tut: durdur",
  icon: "sparkle",
  onMount: (root) => mountStory(root.querySelector(".screen-welcome"), { duration: 4200 }),
  content: `
    <section class="screen-welcome">
      <div class="story-bars" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="welcome-topbar">
        <div class="mini-brand">
          <img src="assets/img/O.svg" width="29" height="32" alt="Onspay" />
        </div>
        <span class="welcome-tag">Finans, kolayca.</span>
      </div>
      <div class="story-stage" role="group" aria-label="Tanıtım">
        <article class="story-slide" aria-label="1 / 3">
          <div class="hero-art" aria-hidden="true">
            <div class="hero-orbit"></div>
            <div class="hero-card">
              <div class="hero-card-label">ONSPAY CARD</div>
              <div class="hero-card-chip"></div>
              <div class="hero-card-dots"></div>
            </div>
            <div class="floating-coin coin-one">₺</div>
            <div class="floating-coin coin-two">✦</div>
            <span class="sparkle sparkle-one">✦</span>
            <span class="sparkle sparkle-two">✧</span>
          </div>
          <div class="welcome-copy">
            <p class="welcome-kicker">Paran, senin kontrolünde</p>
            <h2>Paranı yönetmek <span>artık daha kolay.</span></h2>
            <p>Harcamalarını takip et, ödemelerini tek yerden kolayca yönet.</p>
          </div>
        </article>
        <article class="story-slide" aria-label="2 / 3">
          <div class="hero-art" aria-hidden="true">
            <div class="hero-orbit"></div>
            <div class="spend-card">
              <div class="spend-head"><span>Kasım harcamaları</span><em>↘ %8</em></div>
              <strong>₺ 2.248,09</strong>
              <div class="spend-bars">
                <span style="--h:38%;--i:0"></span><span style="--h:62%;--i:1"></span><span style="--h:30%;--i:2"></span><span style="--h:78%;--i:3"></span><span style="--h:48%;--i:4"></span><span class="is-peak" style="--h:100%;--i:5"></span><span style="--h:56%;--i:6"></span>
              </div>
              <div class="spend-tags"><i>Market</i><i>Fatura</i><i>Kafe</i></div>
            </div>
            <span class="sparkle sparkle-one">✦</span>
            <span class="sparkle sparkle-two">✧</span>
          </div>
          <div class="welcome-copy">
            <p class="welcome-kicker">Harcamalar</p>
            <h2>Harcamalarını <span>net gör.</span></h2>
            <p>Harcamaların kategorilere ayrılır, aylık özetin her zaman elinin altında olur.</p>
          </div>
        </article>
        <article class="story-slide" aria-label="3 / 3">
          <div class="hero-art" aria-hidden="true">
            <div class="hero-orbit"></div>
            <div class="send-scene">
              <div class="send-flow">
                <span class="story-avatar">A</span>
                <span class="send-track"><i class="send-dot"></i></span>
                <span class="story-avatar is-to">AY</span>
              </div>
              <div class="send-pill"><strong>₺ 1.250,00</strong><span>ANINDA GÖNDERİM</span></div>
            </div>
            <span class="sparkle sparkle-one">✦</span>
            <span class="sparkle sparkle-two">✧</span>
          </div>
          <div class="welcome-copy">
            <p class="welcome-kicker">Para gönderme</p>
            <h2>Saniyeler içinde <span>gönder.</span></h2>
            <p>Sevdiklerine anında para gönder, onayı tek dokunuşla ver.</p>
          </div>
        </article>
        <button class="story-tap story-tap-prev" type="button" aria-label="Önceki"></button>
        <button class="story-tap story-tap-next" type="button" aria-label="Sonraki"></button>
      </div>
      <div class="story-actions">
        <button class="primary-button welcome-cta" data-go="register" type="button">Hemen başla <span aria-hidden="true">→</span></button>
        <p class="welcome-footer">Zaten hesabın var mı? <button data-go="login" type="button">Giriş yap</button></p>
      </div>
    </section>`,
};
