export default {
  id: "welcome",
  group: "Başlangıç",
  thumb: "dark",
  title: "Hoş geldin",
  subtitle: "Başlangıç",
  detailTitle: "İlk izlenim",
  description:
    "Onspay'e hoş geldin. Para yönetimini daha kolay ve anlaşılır hale getiren deneyim burada başlıyor.",
  flow: "İlk kullanım",
  interaction: "Başlangıç ekranı",
  icon: "sparkle",
  content: `
    <section class="screen-welcome">
      <div class="welcome-topbar">
        <div class="mini-brand">
          <img src="assets/img/O.svg" width="29" height="32" alt="Onspay" />
        </div>
        <span class="welcome-tag">Finans, kolayca.</span>
      </div>
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
        <button class="primary-button welcome-cta" data-go="login" type="button">Hemen başla <span aria-hidden="true">→</span></button>
        <p class="welcome-footer">Zaten hesabın var mı? <strong>Giriş yap</strong></p>
      </div>
    </section>`,
};
