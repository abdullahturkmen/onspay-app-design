export function mountMethodTabs(root) {
  const tabs = [...root.querySelectorAll(".method-tab")];
  const panels = tabs.map((tab) => root.querySelector(`#${tab.getAttribute("aria-controls")}`));
  const controller = new AbortController();
  const options = { signal: controller.signal };

  function selectTab(index) {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[i].hidden = !selected;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(index), options);
    tab.addEventListener("keydown", (event) => {
      let next;
      switch (event.key) {
        case "ArrowLeft": next = (index - 1 + tabs.length) % tabs.length; break;
        case "ArrowRight": next = (index + 1) % tabs.length; break;
        case "Home": next = 0; break;
        case "End": next = tabs.length - 1; break;
        default: return;
      }
      event.preventDefault();
      selectTab(next);
      tabs[next].focus();
    }, options);
  });

  return () => controller.abort();
}
