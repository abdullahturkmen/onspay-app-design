import { icon } from "../components/icons.js";
import { bottomNav, comingSoonMessage, personAvatar, tabHeader } from "../components/ui.js";

const link = (iconName, label) => `
  <button class="list-row" data-toast="${comingSoonMessage}" type="button">
    <span class="row-icon">${icon(iconName)}</span>
    <span class="row-copy"><strong>${label}</strong></span>
    <span class="row-trailing">${icon("chevron")}</span>
  </button>`;

const toggle = (iconName, label, isOn) => `
  <div class="list-row">
    <span class="row-icon">${icon(iconName)}</span>
    <span class="row-copy"><strong>${label}</strong></span>
    <span class="switch${isOn ? " is-on" : ""}" role="img" aria-label="${isOn ? "Açık" : "Kapalı"}"></span>
  </div>`;

export default {
  id: "profile",
  group: "Hesabım",
  thumb: "plain",
  title: "Profil",
  subtitle: "Hesap ve güvenlik",
  detailTitle: "Hesap ayarları",
  description:
    "Kişisel bilgiler, güvenlik tercihleri ve destek bağlantıları. Çıkış yap ile prototip başlangıç ekranına döner.",
  flow: "Hesap yönetimi",
  interaction: "Çıkış yap ile hoş geldin ekranına dönülür",
  icon: "user",
  content: `
    <section class="screen-tab">
      ${tabHeader("Profil")}
      <div class="profile-card surface-card">
        ${personAvatar("A", "orange", "is-large")}
        <strong>Abdullah</strong>
        <span class="phone-number">+90 5•• ••• 42 18</span>
        <span class="verified-badge">${icon("check")} Doğrulanmış hesap</span>
      </div>
      <div class="date-label">HESAP</div>
      <div class="surface-card">
        ${link("user", "Kişisel bilgiler")}
        ${link("gauge", "Limitlerim")}
      </div>
      <div class="date-label">GÜVENLİK VE TERCİHLER</div>
      <div class="surface-card">
        ${toggle("shield", "Biyometrik giriş", true)}
        ${toggle("bell", "Bildirimler", true)}
        ${link("help", "Yardım ve destek")}
      </div>
      <button class="logout-button" data-go="welcome" type="button">${icon("logout")} Çıkış yap</button>
      ${bottomNav("profile")}
    </section>`,
};
