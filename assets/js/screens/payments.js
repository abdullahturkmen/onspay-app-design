import { icon } from "../components/icons.js";
import { comingSoonMessage, roundButton, subHeader } from "../components/ui.js";

const categories = [
  ["bolt", "Elektrik"],
  ["drop", "Su"],
  ["flame", "Doğalgaz"],
  ["wifi", "İnternet"],
  ["phone", "Telefon"],
  ["grid", "Diğer"],
];

const upcoming = [
  ["bolt", "Elektrik faturası", "Son ödeme · 24 Kasım", "₺ 486,20"],
  ["wifi", "İnternet faturası", "Son ödeme · 28 Kasım", "₺ 349,90"],
];

export default {
  id: "payments",
  group: "Kartlar ve ödemeler",
  thumb: "list",
  title: "Ödemeler",
  subtitle: "Fatura ve QR ödeme",
  detailTitle: "Fatura ve kurum ödemeleri",
  description:
    "Kurum arama, kategori kısayolları ve yaklaşan ödemeler bir arada. QR ile ödeme en üstte öne çıkarılır.",
  flow: "Ödemeler",
  interaction: "Geri oku ile ana sayfaya dönülür",
  icon: "receipt",
  content: `
    <section class="screen-flow">
      ${subHeader("Ödemeler", "home", roundButton("search", "Ara"))}
      <button class="qr-banner" data-toast="${comingSoonMessage}" type="button">
        <span class="qr-icon">${icon("qr")}</span>
        <span><strong>QR ile hızlı öde</strong><span>Kodu okut, saniyeler içinde öde</span></span>
      </button>
      <div class="section-heading"><strong>Kategoriler</strong></div>
      <div class="category-grid">
        ${categories
          .map(
            ([iconName, label]) =>
              `<button class="category" data-toast="${comingSoonMessage}" type="button"><span class="category-icon">${icon(iconName)}</span>${label}</button>`,
          )
          .join("")}
      </div>
      <div class="section-heading"><strong>Yaklaşan ödemeler</strong><span class="count-pill">2</span></div>
      <div class="surface-card">
        ${upcoming
          .map(
            ([iconName, title, due, amount]) => `
        <div class="list-row">
          <span class="row-icon">${icon(iconName)}</span>
          <span class="row-copy"><strong>${title}</strong><span>${due}</span></span>
          <span class="row-end"><strong>${amount}</strong><button class="small-button" data-toast="${comingSoonMessage}" type="button">Öde</button></span>
        </div>`,
          )
          .join("")}
      </div>
    </section>`,
};
