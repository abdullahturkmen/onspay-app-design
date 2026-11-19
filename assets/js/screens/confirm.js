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
    "Alıcı ve tutarın altında banka, işlem ücreti, ödeme tipi ve işlem kodu örnek değerlerle gösterilir.",
  flow: "Para gönderme · 2/3",
  interaction: "Onayla ile işlem tamamlanır, Vazgeç ile geri dönülür",
  icon: "shield",
  content: `
    <section class="screen-flow">
      ${subHeader("İşlemi onayla", "transfer")}
      <div class="confirm-hero">
        ${personAvatar("AY", "orange", "is-large")}
        <strong>Ayşe Yılmaz</strong>
        <span class="iban">TR92 4523 7654 7645 3920</span>
        <div class="confirm-amount">₺ 1.250<small>,00</small></div>
      </div>
      <div class="receipt-card">
        <div class="receipt-row"><span>Banka</span><strong>Garanti</strong></div>
        <div class="receipt-row"><span>İşlem ücreti</span><strong>₺ 0,00</strong></div>
        <div class="receipt-row"><span>Ödeme tipi</span><strong>Bireysel</strong></div>
        <div class="receipt-row"><span>İşlem kodu</span><strong>ONP-284901</strong></div>
      </div>
      <div class="cta-area">
        <button class="primary-button button-accent" data-go="success" type="button">Onayla ve gönder ${icon("arrow")}</button>
        <button class="secondary-button" data-go="home" type="button">Vazgeç</button>
      </div>
    </section>`,
};
