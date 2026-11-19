import { icon } from "../components/icons.js";
import { bottomNav, comingSoonMessage, roundButton, tabHeader } from "../components/ui.js";

const action = (iconName, label) =>
  `<button class="quick-action" data-toast="${comingSoonMessage}" type="button"><span class="action-icon">${icon(iconName)}</span><span>${label}</span></button>`;

export default {
  id: "cards",
  group: "Kartlar ve ödemeler",
  thumb: "header",
  title: "Kartlarım",
  subtitle: "Kart ve limit yönetimi",
  detailTitle: "Kart yönetimi",
  description:
    "Sanal ve fiziksel kartlar tek yerde. Dondurma, limit ve PIN gibi sık kullanılan işlemler kartın hemen altında.",
  flow: "Kart yönetimi",
  interaction: "Alt menü ile diğer sekmelere geçiş",
  icon: "card",
  content: `
    <section class="screen-tab">
      ${tabHeader("Kartlarım", roundButton("plus", "Yeni kart ekle"))}
      <div class="card-stack">
        <div class="pay-card">
          <div class="pay-card-top">
            <img src="assets/img/O.svg" width="29" height="32" alt="Onspay" />
            <span class="pay-card-tag">Sanal kart</span>
          </div>
          <div class="pay-card-number">••••  ••••  ••••  4821</div>
          <div class="pay-card-meta">
            <span>Kart sahibi<strong>ABDULLAH</strong></span>
            <span>Son kullanma<strong>09/29</strong></span>
          </div>
        </div>
      </div>
      <div class="quick-actions">
        ${action("snow", "Dondur")}
        ${action("gauge", "Limit")}
        ${action("lock", "PIN")}
        ${action("eye", "Detaylar")}
      </div>
      <div class="limit-card surface-card">
        <div class="limit-head"><span>Aylık harcama limiti</span><strong>₺ 18.400 <small>/ 30.000</small></strong></div>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="61" aria-label="Limit kullanımı"><span></span></div>
        <div class="limit-foot">₺ 11.600 kullanılabilir · Limit 1 Aralık'ta yenilenir</div>
      </div>
      <div class="section-heading"><strong>Kart hareketleri</strong><button class="link-button" data-go="transactions" type="button">Hepsini gör</button></div>
      <div class="transaction-list">
        <div class="transaction">
          <span class="transaction-icon">${icon("coffee")}</span>
          <span class="transaction-copy"><strong>Kafe</strong><span>Bugün, 11:08</span></span>
          <span class="transaction-amount">−₺ 96,00</span>
        </div>
        <div class="transaction">
          <span class="transaction-icon">${icon("repeat")}</span>
          <span class="transaction-copy"><strong>Dijital abonelik</strong><span>Dün, 00:01</span></span>
          <span class="transaction-amount">−₺ 169,99</span>
        </div>
      </div>
      ${bottomNav("cards")}
    </section>`,
};
