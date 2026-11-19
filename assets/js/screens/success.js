export default {
  id: "success",
  group: "Para gönderme",
  thumb: "success",
  title: "İşlem başarılı",
  subtitle: "Onay ekranı",
  detailTitle: "İşlem tamamlandı",
  description:
    "İşlem sonunda net bir onay ve kısa bir makbuz özeti gösterilir. Ana sayfaya dönerek prototipi tekrar gezebilirsin.",
  flow: "Para gönderme",
  interaction: "Ana sayfaya dönüş",
  icon: "check",
  content: `
    <section class="screen-success">
      <div class="success-topbar"><button data-go="home" type="button" aria-label="Geri dön">‹</button><span>İşlem özeti</span><span style="width:16px"></span></div>
      <div class="success-illustration" aria-hidden="true"><span>✓</span></div>
      <h2 class="success-heading">İşlem başarılı!</h2>
      <p class="success-description">Para gönderme işlemin tamamlandı. İşlem detaylarını aşağıda görebilirsin.</p>
      <div class="receipt-card">
        <div class="receipt-row"><span>Alıcı</span><strong>Ayşe Yılmaz</strong></div>
        <div class="receipt-row"><span>İşlem tarihi</span><strong>Bugün, 14:36</strong></div>
        <div class="receipt-row"><span>İşlem numarası</span><strong>ONP-284901</strong></div>
        <div class="receipt-row total"><span>Gönderilen tutar</span><strong>₺ 1.250,00</strong></div>
      </div>
      <div class="success-actions">
        <button class="primary-button success-home" data-go="home" type="button">Ana sayfaya dön <span aria-hidden="true">→</span></button>
        <button class="primary-button success-share" data-toast="Makbuz paylaşımı prototipte gösterim amaçlıdır." type="button">Dekontu paylaş</button>
      </div>
    </section>`,
};
