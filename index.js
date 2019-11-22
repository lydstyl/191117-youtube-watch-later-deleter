// Paste all this code in your console when you are in your Watch later list page and press enter if you whant to delete it

function clickItemButtonList() {
  document
    .querySelector('.style-scope ytd-playlist-video-renderer button')
    .click();
}

function inListButtonClick(buttonNumber) {
  document
    .querySelectorAll('.style-scope ytd-menu-service-item-renderer')
    [buttonNumber - 1].click();
}

function is3ButtonList() {
  if (
    document.querySelectorAll('.style-scope ytd-menu-service-item-renderer')
      .length === 3
  )
    return true;
  return false;
}

setInterval(() => {
  clickItemButtonList();

  is3ButtonList() ? inListButtonClick(3) : inListButtonClick(1);
}, 200);
