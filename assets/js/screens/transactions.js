import { icon } from "../components/icons.js";
import { bottomNav, roundButton, tabHeader } from "../components/ui.js";

const transaction = (iconName, title, time, amount, incoming = false) => `
  <div class="transaction">
    <span class="transaction-icon${incoming ? " is-incoming" : ""}">${icon(iconName)}</span>
    <span class="transaction-copy"><strong>${title}</strong><span>${time}</span></span>
    <span class="transaction-amount${incoming ? " positive" : ""}">${amount}</span>
  </div>`;

export default {
  id: "transactions",
  group: "Hesabım",
  thumb: "list",
  title: "İşlemler",
  subtitle: "Hareket geçmişi",
  detailTitle: "İşlem geçmişi",
  description:
    "Aylık gelen-giden özeti ve tarihe göre gruplanmış hareketler. Filtre çipleri ile liste hızlıca daraltılır.",
  flow: "Hesap hareketleri",
  interaction: "Liste ekran içinde kayar",
  icon: "list",
  content: `
    <section class="screen-tab">
      ${tabHeader("İşlemler", roundButton("search", "İşlemlerde ara"))}
      <div class="chip-row">
        <span class="chip is-active">Tümü</span><span class="chip">Gelen</span><span class="chip">Giden</span><span class="chip">Kart</span>
      </div>
      <div class="summary-card surface-card">
        <div class="summary-item"><span>Kasım · Gelen</span><strong class="is-in">+₺ 19.250,00</strong></div>
        <div class="summary-item"><span>Kasım · Giden</span><strong>−₺ 2.248,09</strong></div>
      </div>
      <div class="date-label">BUGÜN</div>
      <div class="surface-card">
        ${transaction("send", "Ayşe Yılmaz", "14:36 · Para gönderimi", "−₺ 1.250,00")}
        ${transaction("cart", "Market alışverişi", "14:32 · Kart", "−₺ 245,90")}
        ${transaction("coffee", "Kafe", "11:08 · Kart", "−₺ 96,00")}
      </div>
      <div class="date-label">DÜN</div>
      <div class="surface-card">
        ${transaction("bank", "Maaş ödemesi", "09:14 · Havale", "+₺ 18.500,00", true)}
        ${transaction("repeat", "Dijital abonelik", "00:01 · Kart", "−₺ 169,99")}
      </div>
      <div class="date-label">GEÇEN HAFTA</div>
      <div class="surface-card">
        ${transaction("incoming", "Mehmet Kaya", "12 Kasım · Gelen transfer", "+₺ 750,00", true)}
        ${transaction("bolt", "Elektrik faturası", "11 Kasım · Fatura", "−₺ 486,20")}
      </div>
      ${bottomNav("transactions")}
    </section>`,
};
