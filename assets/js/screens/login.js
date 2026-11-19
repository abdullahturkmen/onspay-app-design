import { brandHeader } from "../components/ui.js";

export default {
  id: "login",
  group: "Başlangıç",
  thumb: "plain",
  title: "Giriş yap",
  subtitle: "Hesabına eriş",
  detailTitle: "Güvenli giriş",
  description:
    "Kısa ve sade bir giriş akışı. Ziyaretçi, hesabına e-posta adresiyle veya alternatif yöntemle erişebilir.",
  flow: "Hesap erişimi",
  interaction: "Form ve alternatif giriş",
  icon: "lock",
  content: `
    <section class="screen-login">
      ${brandHeader(`<span class="welcome-tag" style="color:var(--text-4)">Güvenli alan</span>`)}
      <div class="login-heading">
        <p class="welcome-kicker">Tekrar hoş geldin</p>
        <h2>Hesabına giriş yap</h2>
        <p>Devam etmek için bilgilerini gir.</p>
      </div>
      <div class="login-form">
        <label>
          <span class="field-label">E-posta adresi</span>
          <span class="input-shell">
            <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="4" width="15" height="12" rx="2"/><path d="m3.5 5 6.5 5 6.5-5"/></svg>
            <span>ornek@email.com</span>
          </span>
        </label>
        <label>
          <span class="field-label">Şifre</span>
          <span class="input-shell">
            <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="3.5" y="8.5" width="13" height="9" rx="2"/><path d="M6.5 8.5v-3a3.5 3.5 0 0 1 7 0v3"/></svg>
            <span>••••••••</span>
          </span>
        </label>
        <div class="login-options">
          <span class="remember-option"><span class="fake-checkbox"></span> Beni hatırla</span>
          <span class="text-link">Şifremi unuttum</span>
        </div>
        <button class="primary-button login-submit" data-go="home" type="button">Giriş yap <span aria-hidden="true">→</span></button>
      </div>
      <div class="or-divider">veya</div>
      <button class="secondary-button" data-go="home" type="button"><span class="google-mark">G</span> Google ile devam et</button>
      <p class="login-bottom">Henüz hesabın yok mu? <button data-go="welcome" type="button">Hesap oluştur</button></p>
    </section>`,
};
