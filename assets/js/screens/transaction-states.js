import { icon } from "../components/icons.js";
import { statusScreen } from "../components/status-screen.js";

const examples = [
  {
    tone: "error",
    iconName: "close",
    title: "İşlem başarısız",
    subtitle: "Bağlantı hatası",
    heading: "İşlem tamamlanamadı",
    description: "Alıcı bankaya ulaşılamadı. Bu işlem için bakiyenden para düşmedi.",
    rows: [["Durum", "Başarısız"], ["Neden", "Banka bağlantı hatası"], ["Gönderilmek istenen tutar", "₺ 1.250,00", true]],
    action: ["transfer", "Para gönder ekranına dön"],
  },
  {
    tone: "warning",
    iconName: "warning",
    title: "İşlem uyarısı",
    subtitle: "Yetersiz bakiye",
    heading: "Bakiyen yetersiz",
    description: "Para göndermek için cüzdanına para yükle veya göndereceğin tutarı azalt.",
    rows: [["Kullanılabilir bakiye", "₺ 750,00"], ["Gönderilmek istenen tutar", "₺ 1.250,00"], ["Eksik tutar", "₺ 500,00", true]],
    action: ["topup", "Para yükle"],
    secondary: ["transfer", "Para gönder ekranına dön"],
  },
  {
    tone: "pending",
    iconName: "clock",
    title: "İşlem beklemede",
    subtitle: "Banka onayı bekleniyor",
    heading: "İşlem beklemede",
    description: "Para gönderme talebin alındı. Banka onayı bekleniyor; bu sırada aynı işlemi tekrar başlatma.",
    rows: [["Alıcı", "Ayşe Yılmaz"], ["İşlem numarası", "ONP-284902"], ["İşlem tutarı", "₺ 1.250,00", true]],
    action: ["transactions", "İşlemlere git"],
  },
];

export const transactionStates = examples.map(({ tone, iconName, title, subtitle, heading, description, rows, action, secondary = ["home", "Ana sayfaya dön"] }) => ({
  id: `transaction-${tone}`,
  group: "İşlem durumları",
  thumb: "success",
  title,
  subtitle,
  detailTitle: heading,
  description: `Örnek senaryo: ${description}`,
  flow: "Para gönderme · Örnek durum",
  interaction: `${action[1]} veya ${secondary[1].toLocaleLowerCase("tr")}`,
  icon: iconName,
  content: statusScreen({
    tone,
    symbol: icon(iconName),
    heading,
    description,
    rows,
    actions: `
      <button class="primary-button success-home" data-go="${action[0]}" type="button">${action[1]} ${icon("arrow")}</button>
      <button class="primary-button success-share" data-go="${secondary[0]}" type="button">${secondary[1]}</button>`,
  }),
}));
