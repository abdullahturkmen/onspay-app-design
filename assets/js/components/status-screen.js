import { brandLogo } from "./ui.js";

export function statusScreen({ tone, symbol, heading, description, rows = [], actions, backTo = "home" }) {
  return `
    <section class="screen-success" data-result="${tone}">
      <div class="success-topbar">
        <button data-go="${backTo}" type="button" aria-label="Geri dön">‹</button>
        <span class="mini-brand">${brandLogo}</span><span style="width:16px"></span>
      </div>
      <div class="success-illustration" aria-hidden="true"><span>${symbol}</span></div>
      <h2 class="success-heading">${heading}</h2>
      <p class="success-description">${description}</p>
      ${rows.length ? `<div class="receipt-card">
        ${rows.map(([label, value, total]) => `
          <div class="receipt-row${total ? " total" : ""}"><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>` : ""}
      <div class="success-actions">${actions}</div>
    </section>`;
}
