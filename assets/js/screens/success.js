import { statusScreen } from "../components/status-screen.js";

export default {
  id: "success",
  group: "İşlem durumları",
  thumb: "success",
  title: "İşlem başarılı",
  subtitle: "Onay ekranı",
  detailTitle: "İşlem tamamlandı",
  description:
    "İşlem sonunda net bir onay ve kısa bir makbuz özeti gösterilir. Ana sayfaya dönerek prototipi tekrar gezebilirsin.",
  flow: "Para gönderme",
  interaction: "Ana sayfaya dönüş",
  icon: "check",
  content: statusScreen({
    tone: "success",
    symbol: "✓",
    heading: "İşlem başarılı!",
    description: "Para gönderme işlemin tamamlandı. İşlem detaylarını aşağıda görebilirsin.",
    rows: [
      ["Alıcı", "Ayşe Yılmaz"],
      ["İşlem tarihi", "Bugün, 14:36"],
      ["İşlem numarası", "ONP-284901"],
      ["Gönderilen tutar", "₺ 1.250,00", true],
    ],
    actions: `
        <button class="primary-button success-home" data-go="home" type="button">Ana sayfaya dön <span aria-hidden="true">→</span></button>
        <button class="primary-button success-share" data-toast="Makbuz paylaşımı prototipte gösterim amaçlıdır." type="button">Dekontu paylaş</button>`,
  }),
};
