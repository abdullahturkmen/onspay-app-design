import { icon } from "../components/icons.js";
import { brandHeader } from "../components/ui.js";

const demoCode = "123456";

const nextButton = (label) => `<button class="primary-button button-accent" type="submit">${label} ${icon("arrow")}</button>`;

function bindModal(dialog, screen, initialFocus) {
  let returnFocus;
  const closeButton = dialog.querySelector(".register-modal-close");

  function close() {
    dialog.hidden = true;
    screen.inert = false;
    returnFocus.focus({ preventScroll: true });
  }

  closeButton.addEventListener("click", close);
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "Tab") {
      const controls = [...dialog.querySelectorAll("button, input")].filter(
        (control) => !control.disabled && !control.closest("[hidden]"),
      );
      const current = controls.indexOf(event.target);
      const next = current === -1
        ? (event.shiftKey ? controls.length - 1 : 0)
        : (current + (event.shiftKey ? -1 : 1) + controls.length) % controls.length;
      event.preventDefault();
      controls[next].focus();
    }
  });

  return {
    open(trigger) {
      returnFocus = trigger;
      dialog.hidden = false;
      screen.inert = true;
      initialFocus.focus({ preventScroll: true });
    },
    close,
  };
}

export default {
  id: "register",
  group: "Başlangıç",
  thumb: "plain",
  title: "Hesap oluştur",
  subtitle: "Cüzdan başvurusu",
  detailTitle: "Onspay’e katıl",
  description: "Telefon, şifre, isteğe bağlı ticari ileti izni ve zorunlu KVKK bilgilendirmesi içeren kayıt prototipi. Gerçek SMS gönderilmez ve hiçbir bilgi kaydedilmez.",
  flow: "Kayıt formu → SMS doğrulama modalı → Giriş",
  interaction: `Örnek bilgileri kullan, KVKK metnini görüntüle ve devam et. Örnek SMS kodu: ${demoCode}.`,
  icon: "userPlus",
  content: `
    <section class="screen-register">
      ${brandHeader('')}
      <button class="register-back" type="button" data-go="welcome">${icon("back")} Geri</button>
      <div class="register-heading">
        <span class="register-icon">${icon("userPlus")}</span>
        <h2>Hesabını oluştur</h2>
        <p>Cep telefonu numaranı gir ve giriş şifreni belirle.</p>
      </div>
      <form class="register-panel" autocomplete="off">
        <label>
          <span class="field-label">Cep telefonu numarası</span>
          <span class="input-shell register-phone">
            <span>+90</span>
            <input id="register-phone" type="tel" inputmode="numeric" placeholder="5XX XXX XX XX" maxlength="10" pattern="5[0-9]{9}" required aria-describedby="register-phone-hint">
          </span>
        </label>
        <p class="register-hint" id="register-phone-hint">Başında 0 olmadan 10 hane gir. <button class="register-link" type="button" data-fill-demo="phone">Örnek numara kullan</button></p>
        <label>
          <span class="field-label">Şifre</span>
          <span class="input-shell">
            ${icon("lock")}
            <input id="register-password" type="password" minlength="6" maxlength="6" pattern=".{6}" title="Şifre tam 6 karakter olmalı." placeholder="6 karakter" required aria-describedby="register-password-hint">
          </span>
        </label>
        <label>
          <span class="field-label">Şifre tekrarı</span>
          <span class="input-shell">
            ${icon("lock")}
            <input id="register-password-confirmation" type="password" minlength="6" maxlength="6" pattern=".{6}" title="Şifre tekrarı tam 6 karakter olmalı." placeholder="Şifreni tekrar gir" required>
          </span>
        </label>
        <p class="register-hint" id="register-password-hint">Gerçek şifreni kullanma. <button class="register-link" type="button" data-fill-demo="password">Örnek şifre kullan</button></p>
        <div class="register-preferences">
          <label class="register-agreement">
            <input type="checkbox">
            <span>Kampanya ve duyurular için ticari elektronik ileti almak istiyorum. <span class="register-hint">(İsteğe bağlı)</span></span>
          </label>
          <div class="register-kvkk-row">
            <button type="button" class="register-link" data-open-kvkk aria-haspopup="dialog" aria-controls="register-kvkk">KVKK Aydınlatma Metni</button>
            <span class="register-kvkk-status" role="status">Okunması zorunlu</span>
          </div>
        </div>
        ${nextButton("Devam et")}
      </form>
      <p class="register-footer">Zaten hesabın var mı? <button class="register-link" data-go="login" type="button">Giriş yap</button></p>
    </section>
    <div class="register-modal" id="register-kvkk" role="dialog" aria-modal="true" aria-labelledby="register-kvkk-title" hidden>
      <div class="register-modal-card">
        <div class="register-modal-header">
          <span class="register-icon">${icon("shield")}</span>
          <button type="button" class="register-modal-close" aria-label="Kapat">${icon("close")}</button>
        </div>
        <h2 id="register-kvkk-title" tabindex="-1">KVKK Aydınlatma Metni</h2>
        <p><strong>Prototip metni.</strong> Bu ekranda girdiğin bilgiler kaydedilmez veya gönderilmez.</p>
        <p>Canlı uygulamada bu metin; veri sorumlusunu, hangi kişisel verilerin hangi amaçlarla işlendiğini, kimlerle paylaşılabileceğini ve haklarını nasıl kullanabileceğini açıklar.</p>
        <button type="button" class="primary-button button-accent" data-read-kvkk>Okudum</button>
      </div>
    </div>
    <div class="register-modal" id="register-sms" role="dialog" aria-modal="true" aria-labelledby="register-sms-title" hidden>
      <div class="register-modal-card">
        <div class="register-modal-header">
          <span class="register-icon">${icon("phone")}</span>
          <button type="button" class="register-modal-close" aria-label="Kapat">${icon("close")}</button>
        </div>
        <h2 id="register-sms-title">SMS doğrulama</h2>
        <form class="register-panel" data-go="login" autocomplete="off">
          <label>
            <span class="field-label">Doğrulama kodu</span>
            <span class="input-shell">
              <input id="register-code" type="text" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" placeholder="000000" required aria-describedby="register-code-hint">
            </span>
          </label>
          <p id="register-code-hint">Örnek kod: <strong>${demoCode}</strong>. Bu prototipte SMS gönderilmez.</p>
          ${nextButton("Kodu doğrula")}
        </form>
      </div>
    </div>`,
  onMount(root) {
    const screen = root.querySelector(".screen-register");
    const form = screen.querySelector("form");
    const password = screen.querySelector("#register-password");
    const confirmation = screen.querySelector("#register-password-confirmation");
    const kvkk = root.querySelector("#register-kvkk");
    const kvkkTrigger = screen.querySelector("[data-open-kvkk]");
    const kvkkModal = bindModal(kvkk, screen, kvkk.querySelector("h2"));
    const sms = root.querySelector("#register-sms");
    const smsForm = sms.querySelector("form");
    const code = sms.querySelector("#register-code");
    const smsModal = bindModal(sms, screen, code);
    let hasReadKvkk = false;

    kvkkTrigger.addEventListener("click", () => kvkkModal.open(kvkkTrigger));
    kvkk.querySelector("[data-read-kvkk]").addEventListener("click", () => {
      hasReadKvkk = true;
      kvkkModal.close();
      screen.querySelector(".register-kvkk-status").textContent = "Okundu";
    });

    code.addEventListener("input", () => code.setCustomValidity(""));
    for (const input of [password, confirmation]) {
      input.addEventListener("input", () => confirmation.setCustomValidity(""));
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (password.value !== confirmation.value) {
        confirmation.setCustomValidity("Şifreler eşleşmiyor.");
        confirmation.reportValidity();
        return;
      }
      const trigger = event.submitter ?? form.querySelector('button[type="submit"]');
      if (!hasReadKvkk) {
        kvkkModal.open(trigger);
        return;
      }
      smsForm.reset();
      code.setCustomValidity("");
      smsModal.open(trigger);
    });

    smsForm.addEventListener("submit", (event) => {
      if (code.value !== demoCode) {
        event.preventDefault();
        code.setCustomValidity(`Kod eşleşmedi. Örnek kodu gir: ${demoCode}.`);
        code.reportValidity();
      }
    });

    screen.querySelector('[data-fill-demo="phone"]').addEventListener("click", () => {
      screen.querySelector("#register-phone").value = "5000000000";
    });
    screen.querySelector('[data-fill-demo="password"]').addEventListener("click", () => {
      password.value = "Demo26";
      confirmation.value = password.value;
      confirmation.setCustomValidity("");
    });
  },
};
