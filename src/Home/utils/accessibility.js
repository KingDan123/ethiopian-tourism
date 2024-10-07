
export function setAriaLabel(element, label) {
  element.setAttribute("aria-label", label);
}

export function setTabIndex(element, index) {
  element.setAttribute("tabindex", index);
}

export function addKeyboardSupport(element, callback) {
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      callback();
    }
  });
}
