const toggle = document.getElementById("check");

// Load state
chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
  toggle.checked = enabled;
});

// Save state
toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: toggle.checked });
});