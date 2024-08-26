"use strict";

function main() {
  const el = document.querySelector("#link_input");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    const title = tab.title.replace("[", "").replace("]", "");
    el.value = `[${tab.url} ${title}]`;
    el.select();
  });
}

window.addEventListener("load", () => {
  main();

  const buttonEl = document.querySelector("#copy_button");
  buttonEl.addEventListener("click", function () {
    navigator.clipboard.writeText(document.querySelector("#link_input").value);
    this.innerText = "COPIED";
    setTimeout(() => {
      this.innerText = "COPY";
    }, 1000);
  });
});
