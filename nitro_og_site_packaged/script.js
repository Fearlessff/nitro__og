document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      detail.style.borderColor = "#00ffc3";
    } else {
      detail.style.borderColor = "#1a1a2f";
    }
  });
});
