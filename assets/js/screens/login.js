import { brandHeader } from "../components/ui.js";

export default {
  id: "login",
  group: "Başlangıç",
  thumb: "plain",
  title: "Giriş yap",
  subtitle: "Hesabına eriş",
  detailTitle: "Güvenli giriş",
  description:
    "Müşteri, sistemde kayıtlı cep telefonu numarası ve şifresiyle giriş yapar. Bu prototipte bilgiler doğrulanmaz veya kaydedilmez.",
  flow: "Hesap erişimi",
  interaction: "Giriş yap ve örnek giriş geçmişini gör",
  icon: "lock",
  content: `
    <section class="screen-login">
      ${brandHeader(`<span class="welcome-tag" style="color:var(--text-4)">Güvenli alan</span>`)}
      <div class="login-heading">
        <p class="welcome-kicker">Tekrar hoş geldin</p>
        <h2>Hesabına giriş yap</h2>
        <p>Devam etmek için kayıtlı cep telefonu numaranı ve şifreni gir.</p>
      </div>
      <form class="login-form" data-go="home" data-show-login-history autocomplete="off">
        <label>
          <span class="field-label">Cep telefonu numarası</span>
          <span class="input-shell">
            <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="5" y="2.5" width="10" height="15" rx="2"/><path d="M9 14.5h2"/></svg>
            <input type="tel" inputmode="tel" placeholder="05XX XXX XX XX" required>
          </span>
        </label>
        <label>
          <span class="field-label">Şifre</span>
          <span class="input-shell">
            <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="3.5" y="8.5" width="13" height="9" rx="2"/><path d="M6.5 8.5v-3a3.5 3.5 0 0 1 7 0v3"/></svg>
            <input type="password" minlength="6" maxlength="6" pattern=".{6}" title="Şifre tam 6 karakter olmalı." placeholder="••••••" required>
          </span>
        </label>
        <div class="login-options">
          <span class="remember-option"><span class="fake-checkbox"></span> Beni hatırla</span>
          <span class="text-link">Şifremi unuttum</span>
        </div>
        <button class="primary-button login-submit" type="submit">Giriş yap <span aria-hidden="true">→</span></button>
      </form>
      <p class="login-bottom">Henüz hesabın yok mu? <button data-go="register" type="button">Hesap oluştur</button></p>
    </section>`,
};
