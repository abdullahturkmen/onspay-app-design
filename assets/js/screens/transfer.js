import { icon } from "../components/icons.js";
import { mountMethodTabs } from "../components/method-tabs.js";
import { personAvatar, subHeader } from "../components/ui.js";

export default {
  id: "transfer",
  group: "Para gönderme",
  thumb: "plain",
  title: "Para gönder",
  subtitle: "Alıcı ve tutar",
  detailTitle: "Alıcı ve tutar seçimi",
  description:
    "Alıcı bilgisi IBAN ve ad soyad, Onspay numarası veya cep numarasıyla girilebilir. Tutar her iki sekmede de görünür; Devam et örnek onay ekranını açar.",
  flow: "Para gönderme · 1/3",
  interaction: "Gönderim yöntemini ve ödeme tipini seçme, örnek işlemi önizleme",
  icon: "send",
  content: `
    <section class="screen-flow">
      ${subHeader("Para gönder", "home")}
      <div class="method-tabs" role="tablist" aria-label="Para gönderme yöntemi">
        <button class="method-tab" id="transfer-iban-tab" type="button" role="tab" aria-selected="true" aria-controls="transfer-iban-panel">${icon("bank")} IBAN</button>
        <button class="method-tab" id="transfer-number-tab" type="button" role="tab" aria-selected="false" aria-controls="transfer-number-panel" tabindex="-1">${icon("phone")} Onspay no / cep no</button>
      </div>
      <div class="method-panel transfer-method-panel" id="transfer-iban-panel" role="tabpanel" aria-labelledby="transfer-iban-tab">
        <div class="section-heading"><strong>Kime gönderiyorsun?</strong></div>
        <div class="recipient-row">
          <div class="recipient is-selected">${personAvatar("AY")}<span>Ayşe</span></div>
          <div class="recipient">${personAvatar("MK", "dark")}<span>Mehmet</span></div>
          <div class="recipient">${personAvatar("ZD", "soft")}<span>Zeynep</span></div>
          <div class="recipient"><span class="person-avatar is-new">${icon("userPlus")}</span><span>Yeni</span></div>
        </div>
        <label class="flow-field">
          Alıcının IBAN'ı
          <input type="text" placeholder="TR00 0000 0000 0000 0000 0000 00" autocomplete="off" spellcheck="false">
        </label>
        <label class="flow-field">
          Alıcı adı soyadı
          <input type="text" placeholder="Adı ve soyadı" autocomplete="off">
        </label>
      </div>
      <div class="method-panel transfer-method-panel" id="transfer-number-panel" role="tabpanel" aria-labelledby="transfer-number-tab" hidden>
        <label class="flow-field">
          Alıcının Onspay numarası veya cep numarası
          <input type="text" inputmode="tel" placeholder="Onspay no veya 05XX XXX XX XX" autocomplete="off">
        </label>
      </div>
      <div class="amount-block">
        <span class="amount-label">Gönderilecek tutar</span>
        <div class="amount-value">₺ 1.250<small>,00</small></div>
        <span class="amount-hint">Nakit bakiye · ₺ 24.850,00</span>
      </div>
      <label class="flow-field transfer-payment-type">
        Ödeme tipi
        <select>
          <option value="" selected disabled>Ödeme tipi seç</option>
          <option value="individual">Bireysel</option>
          <option value="rent">Ev kirası</option>
          <option value="dues">Aidat</option>
          <option value="bill">Fatura</option>
          <option value="other">Diğer</option>
        </select>
      </label>
      <div class="input-shell">${icon("edit")}<span>Açıklama ekle (isteğe bağlı)</span></div>
      <div class="cta-area">
        <button class="primary-button button-accent" data-go="confirm" type="button">Devam et ${icon("arrow")}</button>
        <p class="transfer-demo-note">Onay ekranı örnek işlem bilgilerini gösterir.</p>
      </div>
    </section>`,
  onMount: mountMethodTabs,
};
