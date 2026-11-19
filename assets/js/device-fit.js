const MIN_SCALE = 0.3;
const MAX_SCALE = 1.2;

// Telefon sabit tasarım boyutunda çizilir; burada yalnızca tek bir ölçekle alana sığdırılır.
// Böylece en-boy oranı ve ekran içerikleri hiçbir pencere boyutunda değişmez.
export function fitDeviceToStage(stage, device) {
  const caption = stage.querySelector(".stage-caption");

  function fit() {
    const stageStyle = getComputedStyle(stage);
    const availableWidth =
      stage.clientWidth - parseFloat(stageStyle.paddingLeft) - parseFloat(stageStyle.paddingRight);
    const availableHeight =
      stage.clientHeight -
      parseFloat(stageStyle.paddingTop) -
      parseFloat(stageStyle.paddingBottom) -
      caption.offsetHeight -
      parseFloat(getComputedStyle(caption).marginTop);

    device.style.zoom = 1;
    const scale = Math.min(availableWidth / device.offsetWidth, availableHeight / device.offsetHeight);
    device.style.zoom = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
  }

  new ResizeObserver(fit).observe(stage);
  fit();
}
