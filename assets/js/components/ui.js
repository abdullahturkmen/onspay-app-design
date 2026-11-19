import { icon } from "./icons.js";

const logo = `<img src="assets/img/logo.svg" width="109" height="32" alt="Onspay" />`;

const tabs = [
  { id: "home", label: "Ana sayfa", icon: "home" },
  { id: "transactions", label: "İşlemler", icon: "list" },
  { id: "cards", label: "Kartlarım", icon: "card" },
  { id: "profile", label: "Profil", icon: "user" },
];

export const comingSoonMessage = "Bu ekran bir sonraki tasarım turunda eklenecek.";

export function brandHeader(trailing = "") {
  return `
    <div class="app-topbar">
      <div class="mini-brand">${logo}</div>
      ${trailing}
    </div>`;
}

export function tabHeader(title, trailing = "") {
  return `
    <div class="tab-header">
      <h2>${title}</h2>
      <div class="header-actions">${trailing}</div>
    </div>`;
}

export function subHeader(title, backTo, trailing = "<span></span>") {
  return `
    <div class="sub-header">
      <button class="round-button" data-go="${backTo}" type="button" aria-label="Geri dön">${icon("back")}</button>
      <h2>${title}</h2>
      ${trailing}
    </div>`;
}

export function roundButton(iconName, label, attributes = `data-toast="${comingSoonMessage}"`) {
  return `<button class="round-button" ${attributes} type="button" aria-label="${label}">${icon(iconName)}</button>`;
}

export function personAvatar(initials, tone = "orange", size = "") {
  return `<span class="person-avatar tone-${tone} ${size}" aria-hidden="true">${initials}</span>`;
}

export function bottomNav(active) {
  return `
    <nav class="bottom-nav" aria-label="Ana gezinme">
      ${tabs
        .map(
          (tab) => `
        <button class="bottom-nav-item" data-go="${tab.id}" type="button"${tab.id === active ? ' aria-current="page"' : ""}>
          ${icon(tab.icon)}
          <span>${tab.label}</span>
        </button>`,
        )
        .join("")}
    </nav>`;
}
