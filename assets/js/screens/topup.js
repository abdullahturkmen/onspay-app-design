import { icon } from "../components/icons.js";
import { subHeader } from "../components/ui.js";

// Örnek (kurgusal) hesap bilgileri; gerçek bilgilerle değiştirilmelidir
const account = {
  holder: "Onspay A.Ş.",
  bank: "Örnek Banka",
  iban: "TR62 0001 5001 5800 7312 9451 08",
  code: "ONP-482913",
};

const copyButton = (value, message, label, extraClass = "") =>
  `<button class="copy-button is-soft ${extraClass}" data-copy="${value}" data-copy-message="${message}" type="button" aria-label="${label}">${icon("copy")}</button>`;

const detailRow = (label, value, copy) => `
  <div class="detail-row">
    <span class="detail-label">${label}</span>
    <span class="detail-value">
      <strong>${value}</strong>
      ${copy ? copyButton(copy, `${label} kopyalandı.`, `${label} kopyala`) : ""}
    </span>
  </div>`;

// data-* içinde satır sonu için &#10; kullanılır
const allDetails = [
  `Alıcı adı: ${account.holder}`,
  `Banka: ${account.bank}`,
  `IBAN: ${account.iban}`,
  `Yatırma kodu (açıklamaya yaz): ${account.code}`,
].join("&#10;");

export default {
  id: "topup",
  group: "Para yükleme",
  thumb: "list",
  title: "Para yükle",
  subtitle: "Hesap bilgileri",
  detailTitle: "Havale ile para yükleme",
  description:
    "Kullanıcının kendi bankasından Onspay hesabına para yatırırken ihtiyaç duyduğu alıcı adı, IBAN ve yatırma kodu tek ekranda. Her bilgi tek dokunuşla kopyalanır.",
  flow: "Para yükleme",
  interaction: "Kopyala ikonları bilgiyi panoya alır",
  icon: "bank",
  content: `
    <section class="screen-flow">
      ${subHeader("Para yükle", "home")}
      <p class="topup-intro">Kendi banka hesabından aşağıdaki hesaba havale veya EFT yap. Yatırma kodunu açıklama kısmına yazmayı unutma.</p>
      <div class="code-card">
        <span class="detail-label">Yatırma kodun</span>
        <div class="code-value">
          <strong>${account.code}</strong>
          ${copyButton(account.code, "Yatırma kodu kopyalandı.", "Yatırma kodunu kopyala")}
        </div>
        <span class="code-hint">Havale açıklamasına bu kodu yaz</span>
      </div>
      <div class="surface-card detail-card">
        ${detailRow("Alıcı adı", account.holder, account.holder)}
        ${detailRow("Banka", account.bank)}
        ${detailRow("IBAN", account.iban, account.iban.replaceAll(" ", ""))}
      </div>
      <div class="secure-note">${icon("help")}<span>Açıklamada kod yoksa transferin hesabınla eşleştirilmesi gecikebilir.</span></div>
      <div class="cta-area">
        <button class="primary-button button-accent" data-copy="${allDetails}" data-copy-message="Hesap bilgileri kopyalandı." type="button">Tüm bilgileri kopyala ${icon("copy")}</button>
        <button class="secondary-button" data-go="home" type="button">Ana sayfaya dön</button>
      </div>
    </section>`,
};
