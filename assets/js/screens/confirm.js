import { icon } from "../components/icons.js";
import { personAvatar, subHeader } from "../components/ui.js";

export default {
  id: "confirm",
  group: "Para gönderme",
  thumb: "plain",
  title: "Onay",
  subtitle: "İşlem özeti",
  detailTitle: "Göndermeden önce kontrol",
  description:
    "Alıcı, tutar ve ücret bilgisi tek bakışta özetlenir. Güvenlik notu kullanıcıya işlemin doğrulanacağını hatırlatır.",
  flow: "Para gönderme · 2/3",
  interaction: "Onayla ile işlem tamamlanır, Vazgeç ile geri dönülür",
  icon: "shield",
  content: `
    <section class="screen-flow">
      ${subHeader("İşlemi onayla", "transfer")}
      <div class="confirm-hero">
        ${personAvatar("AY", "orange", "is-large")}
        <strong>Ayşe Yılmaz</strong>
        <span class="iban">TR•• •••• •••• •••• 3920</span>
        <div class="confirm-amount">₺ 1.250<small>,00</small></div>
      </div>
      <div class="receipt-card">
        <div class="receipt-row"><span>Gönderim türü</span><strong>Anında</strong></div>
        <div class="receipt-row"><span>Gönderim ücreti</span><strong>Ücretsiz</strong></div>
        <div class="receipt-row"><span>Kaynak hesap</span><strong>Onspay Bakiye</strong></div>
        <div class="receipt-row total"><span>Toplam tutar</span><strong>₺ 1.250,00</strong></div>
      </div>
      <div class="secure-note">${icon("shield")}<span>İşlem, parmak izi veya yüz tanıma ile doğrulanır.</span></div>
      <div class="cta-area">
        <button class="primary-button button-accent" data-go="success" type="button">Onayla ve gönder ${icon("arrow")}</button>
        <button class="secondary-button" data-go="home" type="button">Vazgeç</button>
      </div>
    </section>`,
};
