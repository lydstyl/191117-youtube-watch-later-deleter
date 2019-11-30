// Paste all this code in your console when you are in your Watch later list page and press enter if you whant to delete it

function clickFirstVideo() {
  document
    .querySelector('.style-scope ytd-playlist-video-renderer button')
    .click();
}

function clickDeleteButton() {
  document
    .querySelector(
      'path[d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"]'
    )
    .parentElement.parentElement.parentElement.click();
}

setInterval(() => {
  clickFirstVideo();
  clickDeleteButton();
}, 100);
