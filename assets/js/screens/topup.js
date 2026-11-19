import { icon } from "../components/icons.js";
import { mountMethodTabs } from "../components/method-tabs.js";
import { subHeader } from "../components/ui.js";

// Örnek (kurgusal) hesap bilgileri; gerçek bilgilerle değiştirilmelidir
const account = {
  holder: "NXT Elektronik A.Ş.",
  iban: "TR62 0001 5001 5800 7312 9451 08",
  walletNumber: "234523453454821",
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
  `IBAN: ${account.iban}`,
  `Açıklama: ${account.walletNumber}`,
].join("&#10;");

export default {
  id: "topup",
  group: "Para yükleme",
  thumb: "list",
  title: "Para yükle",
  subtitle: "Yükleme yöntemleri",
  detailTitle: "Para yükleme yöntemleri",
  description:
    "Banka hesabından yükleme sekmesinde alıcı adı, IBAN ve açıklamaya yazılacak cüzdan numarası kopyalanabilir. Kart ile yükleme sekmesinde örnek kart bilgileri ve tutar girilebilir; prototip ödeme almaz.",
  flow: "Para yükleme",
  interaction: "Yöntem seçme, hesap bilgilerini kopyalama, örnek kart bilgisi ve tutar girme",
  icon: "bank",
  content: `
    <section class="screen-flow">
      ${subHeader("Para yükle", "home")}
      <div class="method-tabs" role="tablist" aria-label="Para yükleme yöntemi">
        <button class="method-tab" id="topup-bank-tab" type="button" role="tab" aria-selected="true" aria-controls="topup-bank-panel">${icon("bank")} Banka hesabından</button>
        <button class="method-tab" id="topup-card-tab" type="button" role="tab" aria-selected="false" aria-controls="topup-card-panel" tabindex="-1">${icon("card")} Kart ile</button>
      </div>
      <div class="method-panel topup-method-panel" id="topup-bank-panel" role="tabpanel" aria-labelledby="topup-bank-tab" tabindex="0">
        <p class="topup-intro">Kendi banka hesabından aşağıdaki hesaba havale veya EFT yap. Cüzdan numaranı açıklama kısmına yazmayı unutma.</p>
        <div class="surface-card detail-card">
          ${detailRow("Alıcı adı", account.holder, account.holder)}
          ${detailRow("IBAN", account.iban, account.iban.replaceAll(" ", ""))}
          ${detailRow("Açıklama", account.walletNumber, account.walletNumber)}
        </div>
        <div class="cta-area">
          <button class="primary-button button-accent" data-copy="${allDetails}" data-copy-message="Hesap bilgileri kopyalandı." type="button">Tüm bilgileri kopyala ${icon("copy")}</button>
          <button class="secondary-button" data-go="home" type="button">Ana sayfaya dön</button>
        </div>
      </div>
      <div class="method-panel topup-method-panel" id="topup-card-panel" role="tabpanel" aria-labelledby="topup-card-tab" hidden>
        <div class="surface-card topup-card-entry">
          <h3>Kart ile para yükle</h3>
          <p id="topup-card-hint">Bu bir prototip. Gerçek kart bilgilerini girme.</p>
          <label class="flow-field">
            Kart numarası
            <input type="text" inputmode="numeric" maxlength="23" placeholder="0000 0000 0000 0000" autocomplete="off" aria-describedby="topup-card-hint">
          </label>
          <label class="flow-field">
            Adı soyadı
            <input type="text" placeholder="Kart üzerindeki ad soyad" autocomplete="off">
          </label>
          <div class="topup-card-field-row">
            <label class="flow-field">
              Ay
              <input type="text" inputmode="numeric" maxlength="2" placeholder="AA" autocomplete="off">
            </label>
            <label class="flow-field">
              Yıl
              <input type="text" inputmode="numeric" maxlength="2" placeholder="YY" autocomplete="off">
            </label>
            <label class="flow-field">
              CVV
              <input type="password" inputmode="numeric" maxlength="4" placeholder="•••" autocomplete="off">
            </label>
          </div>
          <label class="flow-field">
            Tutar (₺)
            <input type="text" inputmode="decimal" placeholder="0,00" autocomplete="off">
          </label>
        </div>
        <div class="cta-area">
          <button class="primary-button button-accent" data-toast="Bu prototipte ödeme alınmaz." type="button">Onayla</button>
          <button class="secondary-button" data-go="home" type="button">Ana sayfaya dön</button>
        </div>
      </div>
    </section>`,
  onMount: mountMethodTabs,
};
