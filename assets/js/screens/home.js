import { icon } from "../components/icons.js";
import { bottomNav, brandHeader, comingSoonMessage, roundButton } from "../components/ui.js";

const loginAttempts = [
  { datetime: "2026-11-18T21:14:00+03:00", date: "18 Kasım 2026 · 21:14", device: "iPhone", success: true },
  { datetime: "2026-11-18T20:58:00+03:00", date: "18 Kasım 2026 · 20:58", device: "Tanınmayan cihaz", success: false },
  { datetime: "2026-11-16T09:32:00+03:00", date: "16 Kasım 2026 · 09:32", device: "iPhone", success: true },
];

const loginHistory = `
  <div class="login-history" role="dialog" aria-modal="true" aria-labelledby="login-history-title" aria-describedby="login-history-description" hidden>
    <div class="login-history-card">
      <span class="login-history-shield">${icon("shield")}</span>
      <h2 id="login-history-title">Son giriş hareketleri</h2>
      <p id="login-history-description">Önceki giriş denemelerin (örnek kayıtlar).</p>
      <ul class="login-history-list">
        ${loginAttempts.map(({ datetime, date, device, success }) => `
          <li>
            <span class="login-history-status${success ? "" : " is-failed"}" aria-hidden="true">${icon(success ? "check" : "close")}</span>
            <div>
              <strong>${success ? "Başarılı giriş" : "Başarısız giriş denemesi"}</strong>
              <span><time datetime="${datetime}">${date}</time> · ${device}</span>
            </div>
          </li>`).join("")}
      </ul>
      <button class="primary-button login-history-dismiss" type="button">Devam et</button>
    </div>
  </div>`;

export default {
  id: "home",
  group: "Ana ekran",
  thumb: "header",
  title: "Ana sayfa",
  subtitle: "Bakiye ve işlemler",
  detailTitle: "Kontrol paneli",
  description:
    "Toplam bakiyeni, nakit ve kart ile yüklenen bakiye dağılımını gör. Hızlı işlemler ve son hareketler aynı ekranda.",
  flow: "Günlük kullanım",
  interaction: "Hızlı işlemlere veya son hareketlere dokun",
  icon: "home",
  onMount(root, { showLoginHistory } = {}) {
    if (!showLoginHistory) return;
    const home = root.querySelector(".screen-home");
    const dialog = root.querySelector(".login-history");
    const dismissButton = dialog.querySelector(".login-history-dismiss");
    const dismiss = () => {
      dialog.hidden = true;
      home.inert = false;
      home.querySelector(".greeting h2").focus({ preventScroll: true });
    };

    home.inert = true;
    dialog.hidden = false;
    dismissButton.focus({ preventScroll: true });
    dismissButton.addEventListener("click", dismiss);
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape" || event.key === "Tab") event.preventDefault();
      if (event.key === "Escape") dismiss();
    });
  },
  content: `
    <section class="screen-home screen-tab">
      ${brandHeader(`<div class="header-actions">${roundButton("bell", "Bildirimler")}<span class="profile-bubble">A</span></div>`)}
      <div class="greeting">
        <p>Günaydın,</p>
        <h2 tabindex="-1">Abdullah 👋</h2>
      </div>
      <div class="balance-card">
        <div class="balance-label">Toplam bakiyen</div>
        <div class="balance-amount">₺ 24.850,00</div>
        <dl class="balance-breakdown">
          <div><dt>Nakit yüklenen bakiye</dt><dd>₺ 18.500,00</dd></div>
          <div><dt>Kart ile yüklenen bakiye</dt><dd>₺ 6.350,00</dd></div>
        </dl>
        <div class="balance-footer">
          <span class="balance-number">
            <span>2345 2345345 4821</span>
            <button class="copy-button" data-copy="234523453454821" data-copy-message="Cüzdan numarası kopyalandı." type="button" aria-label="Cüzdan numarasını kopyala">${icon("copy")}</button>
          </span>
          <span class="balance-change">↗ %12,4 bu ay</span>
        </div>
      </div>
      <div class="quick-actions">
        <button class="quick-action" data-go="transfer" type="button"><span class="action-icon">${icon("send")}</span><span>Para gönder</span></button>
        <button class="quick-action" data-go="topup" type="button"><span class="action-icon">${icon("plus")}</span><span>Para yükle</span></button>
        <button class="quick-action" data-go="payments" type="button"><span class="action-icon">${icon("receipt")}</span><span>Ödemeler</span></button>
        <button class="quick-action" data-toast="${comingSoonMessage}" type="button"><span class="action-icon">${icon("qr")}</span><span>QR öde</span></button>
      </div>
      <div class="section-heading"><strong>Son işlemler</strong><button class="link-button" data-go="transactions" type="button">Hepsini gör</button></div>
      <div class="transaction-list">
        <div class="transaction">
          <span class="transaction-icon">${icon("cart")}</span>
          <span class="transaction-copy"><strong>Market alışverişi</strong><span>Bugün, 14:32</span></span>
          <span class="transaction-amount">−₺ 245,90</span>
        </div>
        <div class="transaction">
          <span class="transaction-icon is-incoming">${icon("bank")}</span>
          <span class="transaction-copy"><strong>Maaş ödemesi</strong><span>Dün, 09:14</span></span>
          <span class="transaction-amount positive">+₺ 18.500,00</span>
        </div>
      </div>
      ${bottomNav("home")}
    </section>
    ${loginHistory}`,
};
