const HOLD_MS = 220;

// Instagram hikayesi gibi çalışan tanıtım akışı: otomatik ilerler, sağa/sola dokununca geçer, basılı tutunca durur.
export function mountStory(root, { duration = 4200 } = {}) {
  const slides = [...root.querySelectorAll(".story-slide")];
  const bars = [...root.querySelectorAll(".story-bars i")];
  const stage = root.querySelector(".story-stage");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0;
  let holdTimer;
  let wasHold = false;

  root.style.setProperty("--story-duration", `${duration}ms`);

  function show(next) {
    index = (next + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
      slide.classList.toggle("is-before", i < index);
    });

    bars.forEach((bar) => bar.classList.remove("is-active", "is-done"));
    // Çubuk animasyonunun baştan başlaması için yeniden hesaplamayı zorluyoruz
    void root.offsetWidth;
    bars.forEach((bar, i) => {
      if (i < index) bar.classList.add("is-done");
      if (i === index) bar.classList.add(reduceMotion ? "is-done" : "is-active");
    });
  }

  // Çubuk dolunca bir sonraki kareye geçilir; son kareden sonra başa dönülür
  root.querySelector(".story-bars").addEventListener("animationend", (event) => {
    if (event.animationName === "story-fill") show(index + 1);
  });

  stage.addEventListener("pointerdown", () => {
    wasHold = false;
    holdTimer = window.setTimeout(() => {
      wasHold = true;
      root.classList.add("is-paused");
    }, HOLD_MS);
  });

  const release = () => {
    window.clearTimeout(holdTimer);
    root.classList.remove("is-paused");
  };
  stage.addEventListener("pointerup", release);
  stage.addEventListener("pointercancel", release);
  stage.addEventListener("pointerleave", release);

  // Basılı tutup bırakmak geçiş sayılmaz
  function onTap(step) {
    if (wasHold) {
      wasHold = false;
      return;
    }
    show(step === -1 ? Math.max(index - 1, 0) : index + 1);
  }
  root.querySelector(".story-tap-prev").addEventListener("click", () => onTap(-1));
  root.querySelector(".story-tap-next").addEventListener("click", () => onTap(1));

  // Fare hareketine göre kartın eğilmesi için -1..1 aralığında konum üretir
  if (!reduceMotion) {
    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect();
      stage.style.setProperty("--tilt-x", (((event.clientX - rect.left) / rect.width - 0.5) * 2).toFixed(3));
      stage.style.setProperty("--tilt-y", (((event.clientY - rect.top) / rect.height - 0.5) * 2).toFixed(3));
    });
    stage.addEventListener("pointerleave", () => {
      stage.style.setProperty("--tilt-x", "0");
      stage.style.setProperty("--tilt-y", "0");
    });
  }

  show(0);

  return () => window.clearTimeout(holdTimer);
}
