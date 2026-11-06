"use strict";

window.addEventListener("load", async () => {
  const status = document.getElementById("widget-status");

  if (typeof window.initWebRTCWidget !== "function") {
    status.dataset.state = "error";
    status.textContent = "The Cognigy widget could not load. Check your internet connection and access to GitHub release downloads, then reload.";
    console.error("Cognigy widget initialization function is unavailable.");
    return;
  }

  try {
    await window.initWebRTCWidget("https://endpoint-trial.cognigy.ai/ae38d89ff3478d6c906eaf0d9e66d902ca38008f5376d52a156e0b65e8942d8e");
    status.dataset.state = "loaded";
    status.textContent = "Widget loaded. Use its call controls when you are ready. Call connectivity has not been verified.";
  } catch (error) {
    status.dataset.state = "error";
    status.textContent = "The Cognigy widget could not initialize. Check the browser console and the configured endpoint, then reload.";
    console.error("Cognigy widget initialization failed.", error);
  }
}, { once: true });
