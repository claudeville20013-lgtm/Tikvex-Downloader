// Keep the footer year current without needing a manual edit each year.
const copyright = document.querySelector(".footer-copy");
if (copyright) {
  copyright.textContent = `© ${new Date().getFullYear()} Tikvex. All rights reserved.`;
}

// The hero shows a mock of the real app UI. Give the button a small
// response so the mock reads as "this is what happens", not just decoration.
const mockButton = document.querySelector(".app-download-btn");
const mockInput = document.querySelector(".app-input span");

if (mockButton && mockInput) {
  const defaultLabel = mockButton.textContent;
  const defaultInput = mockInput.textContent;
  let busy = false;

  mockButton.style.cursor = "pointer";
  mockButton.setAttribute("role", "button");
  mockButton.setAttribute("tabindex", "0");

  const runDemo = () => {
    if (busy) return;
    busy = true;
    mockInput.textContent = "tiktok.com/@creator/video/7…";
    mockButton.textContent = "Downloading…";

    setTimeout(() => {
      mockButton.textContent = "Saved — no watermark ✓";
      setTimeout(() => {
        mockButton.textContent = defaultLabel;
        mockInput.textContent = defaultInput;
        busy = false;
      }, 1800);
    }, 900);
  };

  mockButton.addEventListener("click", runDemo);
  mockButton.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      runDemo();
    }
  });
}
