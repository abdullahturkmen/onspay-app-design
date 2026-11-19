import { icon } from "./components/icons.js";
import { fitDeviceToStage } from "./device-fit.js";
import { screens } from "./screens/index.js";

const pad = (number) => String(number).padStart(2, "0");

const THEME_STORAGE_KEY = "onspay-theme";
const isTheme = (value) => value === "light" || value === "dark";

// Öncelik: bağlantıdaki ?theme=, sonra kayıtlı tercih, sonra cihazın tercihi
function getInitialTheme() {
  const fromUrl = new URLSearchParams(window.location.search).get("theme");
  if (isTheme(fromUrl)) return fromUrl;
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(saved)) return saved;
  } catch {
    // Depolamaya erişilemiyorsa cihaz tercihine düşülür
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function createPrototype() {
  const screenList = document.querySelector("#screen-list");
  const appScreen = document.querySelector("#app-screen");
  const deviceStage = document.querySelector("#device-stage");
  const toast = document.querySelector("#toast");
  let currentIndex = 0;
  let hasRendered = false;
  let unmountScreen = null;
  let toastTimer;
  let autoNextTimer;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function renderScreenList() {
    const scrollTop = screenList.scrollTop;
    screenList.innerHTML = screens
      .map((screen, index) => {
        const groupLabel =
          screen.group !== screens[index - 1]?.group ? `<p class="screen-group">${screen.group}</p>` : "";
        return `${groupLabel}
          <button class="screen-link" type="button" data-screen="${screen.id}" aria-current="${index === currentIndex ? "step" : "false"}">
            <span class="screen-thumb thumb-${screen.thumb}" aria-hidden="true"></span>
            <span class="screen-link-copy">
              <span class="screen-link-title">${screen.title}</span>
              <span class="screen-link-subtitle">${screen.subtitle}</span>
            </span>
            <span class="screen-number">${pad(index + 1)}</span>
          </button>`;
      })
      .join("");
    screenList.scrollTop = scrollTop;
    keepActiveScreenVisible();
  }

  // scrollIntoView sayfanın tamamını kaydırabildiği için yalnızca menü listesini kaydırıyoruz
  function keepActiveScreenVisible() {
    const active = screenList.querySelector('[aria-current="step"]');
    const list = screenList.getBoundingClientRect();
    const item = active.getBoundingClientRect();
    if (item.top < list.top) screenList.scrollTop -= list.top - item.top;
    else if (item.bottom > list.bottom) screenList.scrollTop += item.bottom - list.bottom;
    if (item.left < list.left) screenList.scrollLeft -= list.left - item.left;
    else if (item.right > list.right) screenList.scrollLeft += item.right - list.right;
  }

  // softExit tanımlı ekranlardan (ör. splash) çıkarken tarayıcı eski ekranı yeni ekrana yumuşakça soldurur
  function renderScreen(index, updateHistory = true) {
    window.clearTimeout(autoNextTimer);
    const leavingScreen = hasRendered ? screens[currentIndex] : null;
    hasRendered = true;

    if (leavingScreen?.softExit && document.startViewTransition && !prefersReducedMotion.matches) {
      document.startViewTransition(() => applyScreen(index, updateHistory));
    } else {
      applyScreen(index, updateHistory);
    }
  }

  function applyScreen(index, updateHistory) {
    currentIndex = (index + screens.length) % screens.length;
    const screen = screens[currentIndex];

    // autoNext tanımlı ekranlar (ör. splash) süre dolunca kendiliğinden bir sonrakine geçer
    if (screen.autoNext) {
      autoNextTimer = window.setTimeout(() => goToScreen(screen.autoNext.to), screen.autoNext.after);
    }

    // onMount tanımlı ekranlar (ör. hikaye akışı) çizildikten sonra kendi davranışını bağlar; ayrılırken temizlenir
    unmountScreen?.();
    appScreen.innerHTML = screen.content;
    unmountScreen = screen.onMount?.(appScreen) ?? null;
    document.querySelector(".device-screen").dataset.chrome = screen.chrome ?? "default";
    document.querySelector("#current-screen-title").textContent = screen.title;
    document.querySelector("#detail-index").textContent = `${pad(currentIndex + 1)} / ${pad(screens.length)}`;
    document.querySelector("#detail-title").textContent = screen.detailTitle;
    document.querySelector("#detail-description").textContent = screen.description;
    document.querySelector("#detail-flow").textContent = screen.flow;
    document.querySelector("#detail-interaction").textContent = screen.interaction;
    document.querySelector("#detail-icon").innerHTML = icon(screen.icon);
    document.querySelector("#flow-progress").innerHTML = `${pad(currentIndex + 1)} <i>/</i> ${pad(screens.length)}`;
    document.querySelector("#screen-count").textContent = pad(screens.length);
    document.querySelector("#previous-button").disabled = currentIndex === 0;
    document.querySelector("#next-button").disabled = currentIndex === screens.length - 1;

    renderScreenList();
    appScreen.scrollTop = 0;
    if (updateHistory) {
      const url = new URL(window.location.href);
      url.searchParams.set("screen", screen.id);
      window.history.replaceState({}, "", url);
    }
  }

  function goToScreen(id) {
    const index = screens.findIndex((screen) => screen.id === id);
    if (index !== -1) renderScreen(index);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  screenList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-screen]");
    if (button) goToScreen(button.dataset.screen);
  });

  appScreen.addEventListener("click", (event) => {
    const navigationButton = event.target.closest("[data-go]");
    if (navigationButton) {
      goToScreen(navigationButton.dataset.go);
      return;
    }

    const toastButton = event.target.closest("[data-toast]");
    if (toastButton) showToast(toastButton.dataset.toast);

    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) copyToClipboard(copyButton);
  });

  // Panoya kopyalar; başarılı olursa düğmedeki ikon kısa süre onay işaretine döner (yazı korunur)
  async function copyToClipboard(button) {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
    } catch {
      showToast("Kopyalanamadı, lütfen elle seç.");
      return;
    }
    showToast(button.dataset.copyMessage ?? "Kopyalandı.");

    const copyIcon = button.querySelector(".icon");
    if (!copyIcon) return;
    const original = copyIcon.outerHTML;
    copyIcon.outerHTML = icon("check");
    window.setTimeout(() => {
      if (button.isConnected) button.querySelector(".icon").outerHTML = original;
    }, 1500);
  }

  document.querySelector("#previous-button").addEventListener("click", () => {
    if (currentIndex > 0) renderScreen(currentIndex - 1);
  });

  document.querySelector("#next-button").addEventListener("click", () => {
    if (currentIndex < screens.length - 1) renderScreen(currentIndex + 1);
  });

  document.querySelector("#restart-button").addEventListener("click", () => renderScreen(0));

  const themeButton = document.querySelector("#theme-button");
  const deviceScreen = document.querySelector(".device-screen");

  // Tema yalnızca telefonun içini etkiler; seçim bağlantıya (?theme=) ve tarayıcıya kaydedilir
  function applyTheme(theme) {
    deviceScreen.dataset.theme = theme;
    themeButton.setAttribute("aria-checked", String(theme === "dark"));
    themeButton.querySelector(".theme-switch-knob").innerHTML = icon(theme === "dark" ? "moon" : "sun");
    const url = new URL(window.location.href);
    url.searchParams.set("theme", theme);
    window.history.replaceState({}, "", url);
  }

  themeButton.addEventListener("click", () => {
    const next = deviceScreen.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Depolama kapalıysa tercih yalnızca bu oturumda geçerli olur
    }
  });

  document.querySelector("#fullscreen-button").addEventListener("click", () => {
    const isFullscreen = deviceStage.classList.toggle("is-fullscreen");
    document.querySelector("#fullscreen-button").setAttribute(
      "aria-label",
      isFullscreen ? "Önizlemeden çık" : "Önizlemeyi tam ekran yap",
    );
    document.querySelector("#fullscreen-button").title = isFullscreen ? "Önizlemeden çık" : "Tam ekran";
  });

  document.querySelector("#share-button").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Prototip bağlantısı panoya kopyalandı.");
    } catch (error) {
      showToast("Bağlantı: " + window.location.href);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") deviceStage.classList.remove("is-fullscreen");
    if (event.key === "ArrowLeft" && currentIndex > 0) renderScreen(currentIndex - 1);
    if (event.key === "ArrowRight" && currentIndex < screens.length - 1) renderScreen(currentIndex + 1);
  });

  const initialScreen = new URLSearchParams(window.location.search).get("screen");
  const initialIndex = screens.findIndex((screen) => screen.id === initialScreen);
  applyTheme(getInitialTheme());
  renderScreen(initialIndex === -1 ? 0 : initialIndex, false);
  fitDeviceToStage(deviceStage, document.querySelector("#device"));
}

export default createPrototype;
