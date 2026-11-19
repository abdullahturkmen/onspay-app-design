export default {
  id: "splash",
  group: "Başlangıç",
  thumb: "brand",
  chrome: "accent",
  softExit: true,
  autoNext: { to: "welcome", after: 2800 },
  title: "Açılış",
  subtitle: "Splash ekranı",
  detailTitle: "Marka açılışı",
  description:
    "Uygulama açılırken gösterilen marka ekranı. Logo yumuşak bir animasyonla belirir ve birkaç saniye sonra hoş geldin ekranına geçilir.",
  flow: "İlk kullanım",
  interaction: "Otomatik geçer, dokunarak atlanabilir",
  icon: "sparkle",
  content: `
    <button class="screen-splash" data-go="welcome" type="button" aria-label="Devam et">
      <span class="splash-mark">
        <span class="splash-rings" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="splash-logo" role="img" aria-label="Onspay"></span>
      </span>
      <span class="splash-tagline">Finans, kolayca.</span>
    </button>`,
};
