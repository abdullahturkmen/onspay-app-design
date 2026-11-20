import { icon } from "../components/icons.js";
import { statusScreen } from "../components/status-screen.js";

const examples = [
  {
    id: "app-offline",
    tone: "warning",
    iconName: "wifiOff",
    title: "İnternet bağlantısı yok",
    subtitle: "Çevrimdışı",
    description: "Wi-Fi veya mobil veri bağlantını kontrol et, ardından tekrar dene.",
    retryMessage: "Bağlantı kontrolü bu prototipte gösterim amaçlıdır.",
  },
  {
    id: "app-unavailable",
    tone: "error",
    iconName: "warning",
    title: "Teknik bir aksaklık var",
    subtitle: "Hizmet geçici olarak kullanılamıyor",
    description: "Bu ekranı şu anda açamıyoruz. Biraz sonra tekrar deneyebilirsin.",
    retryMessage: "Yeniden deneme bu prototipte gösterim amaçlıdır.",
  },
  {
    id: "app-invalid-link",
    tone: "warning",
    iconName: "brokenLink",
    title: "Bağlantı açılmadı",
    subtitle: "Geçersiz bağlantı",
    description: "Bu bağlantı hatalı olabilir veya artık geçerli olmayabilir. Bağlantıyı aldığın sayfadan güncel bir bağlantı açabilirsin.",
  },
];

export const appStates = examples.map(({ id, tone, iconName, title, subtitle, description, retryMessage }) => ({
  id,
  group: "Uygulama durumları",
  thumb: "success",
  title,
  subtitle,
  detailTitle: title,
  description: `Örnek senaryo: ${description}`,
  flow: "Uygulama geneli · Örnek durum",
  interaction: retryMessage ? "Tekrar deneme ve ana sayfaya dönüş" : "Ana sayfaya dönüş",
  icon: iconName,
  content: statusScreen({
    tone,
    symbol: icon(iconName),
    heading: title,
    description,
    actions: retryMessage
      ? `<button class="primary-button success-home" data-toast="${retryMessage}" type="button">Tekrar dene ${icon("repeat")}</button>
         <button class="primary-button success-share" data-go="home" type="button">Ana sayfaya dön</button>`
      : `<button class="primary-button success-home" data-go="home" type="button">Ana sayfaya dön ${icon("arrow")}</button>`,
  }),
}));
