import { icon } from "../components/icons.js";
import { bottomNav, brandHeader, comingSoonMessage, roundButton } from "../components/ui.js";

export default {
  id: "home",
  group: "Ana ekran",
  thumb: "header",
  title: "Ana sayfa",
  subtitle: "Bakiye ve işlemler",
  detailTitle: "Kontrol paneli",
  description:
    "Bakiye, hızlı işlemler ve son hareketler tek ekranda. Para gönder ve Ödemeler kısayollarıyla örnek akışlara geçebilirsin.",
  flow: "Günlük kullanım",
  interaction: "Hızlı işlemler ve alt menü",
  icon: "home",
  content: `
    <section class="screen-home screen-tab">
      ${brandHeader(`<div class="header-actions">${roundButton("bell", "Bildirimler")}<span class="profile-bubble">A</span></div>`)}
      <div class="greeting">
        <p>Günaydın,</p>
        <h2>Abdullah 👋</h2>
      </div>
      <div class="balance-card">
        <div class="balance-label">Toplam bakiyen</div>
        <div class="balance-amount">₺ 24.850,00</div>
        <div class="balance-footer">
          <span>••••  4821</span>
          <span class="balance-change">↗ %12,4 bu ay</span>
        </div>
      </div>
      <div class="quick-actions">
        <button class="quick-action" data-go="transfer" type="button"><span class="action-icon">${icon("send")}</span><span>Para gönder</span></button>
        <button class="quick-action" data-toast="${comingSoonMessage}" type="button"><span class="action-icon">${icon("plus")}</span><span>Para ekle</span></button>
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
    </section>`,
};
