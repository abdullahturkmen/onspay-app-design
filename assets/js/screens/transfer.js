import { icon } from "../components/icons.js";
import { personAvatar, subHeader } from "../components/ui.js";

export default {
  id: "transfer",
  group: "Para gönderme",
  thumb: "plain",
  title: "Para gönder",
  subtitle: "Alıcı ve tutar",
  detailTitle: "Alıcı ve tutar seçimi",
  description:
    "Sık gönderilen kişiler tek dokunuşla seçilir, tutar ekranın merkezinde net biçimde görünür. Devam et ile onay adımına geçilir.",
  flow: "Para gönderme · 1/3",
  interaction: "Devam et butonu onay ekranını açar",
  icon: "send",
  content: `
    <section class="screen-flow">
      ${subHeader("Para gönder", "home")}
      <div class="section-heading"><strong>Kime gönderiyorsun?</strong><span>Rehber</span></div>
      <div class="recipient-row">
        <div class="recipient is-selected">${personAvatar("AY")}<span>Ayşe</span></div>
        <div class="recipient">${personAvatar("MK", "dark")}<span>Mehmet</span></div>
        <div class="recipient">${personAvatar("ZD", "soft")}<span>Zeynep</span></div>
        <div class="recipient"><span class="person-avatar is-new">${icon("userPlus")}</span><span>Yeni</span></div>
      </div>
      <div class="amount-block">
        <span class="amount-label">Gönderilecek tutar</span>
        <div class="amount-value">₺ 1.250<small>,00</small></div>
        <span class="amount-hint">Kullanılabilir bakiye · ₺ 24.850,00</span>
      </div>
      <div class="input-shell">${icon("edit")}<span>Açıklama ekle (isteğe bağlı)</span></div>
      <div class="info-card surface-card">
        <div class="info-row"><span>${icon("bolt")} Gönderim türü</span><strong>Anında</strong></div>
        <div class="info-row"><span>Gönderim ücreti</span><strong class="is-free">Ücretsiz</strong></div>
      </div>
      <div class="cta-area">
        <button class="primary-button button-accent" data-go="confirm" type="button">Devam et ${icon("arrow")}</button>
      </div>
    </section>`,
};
