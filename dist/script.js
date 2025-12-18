"use strict";

const COPY_TEXT = "COPY";
const COPIED_TEXT = "COPIED";
const FAILURE_TEXT = "FAILURE";

const setButtonState = (buttonEl, state) => {
  buttonEl.classList.remove("copy--copied", "copy--failure");
  buttonEl.innerText = COPY_TEXT;

  if (state === "copied") {
    buttonEl.classList.add("copy--copied");
    buttonEl.innerText = COPIED_TEXT;
  } else if (state === "failure") {
    buttonEl.classList.add("copy--failure");
    buttonEl.innerText = FAILURE_TEXT;
  }
};

function main() {
  const el = document.querySelector("#link_input");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (!tabs || !tabs.length) return;
    const tab = tabs[0];
    const title = tab.title.replace(/[\[\]]/g, "");
    el.value = `[${tab.url} ${title}]`;
    el.select();
  });
}

window.addEventListener("load", () => {
  main();

  const buttonEl = document.querySelector("#copy_button");
  buttonEl.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(
        document.querySelector("#link_input").value
      );
      setButtonState(buttonEl, "copied");
    } catch (e) {
      setButtonState(buttonEl, "failure");
    }

    setTimeout(() => setButtonState(buttonEl, "default"), 1000);
  });
});
