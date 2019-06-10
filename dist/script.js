'use strict';

function main() {
  const el = document.querySelector('#link_input');
  chrome.tabs.getSelected(null, tab => {
    const title = tab.title.replace('[', '').replace(']', '');
    el.value = `[${tab.url} ${title}]`;
    el.select();
  });
}

window.addEventListener('load', () => {
  main();

  const buttonEl = document.querySelector('#copy_button');
  buttonEl.addEventListener('click', function() {
    document.execCommand('copy');
    this.innerText = 'COPIED';
    setTimeout(() => {
      this.innerText = 'COPY';
    }, 300);
  });
});
