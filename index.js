// Paste all this code in your console when you are in your Watch later list page and press enter if you whant to delete it

const speed = 100;
const videosInListSelector = '.style-scope ytd-playlist-video-renderer button';

function clickFirstVideo() {
  document.querySelector(videosInListSelector).click();
}

function clickDeleteButton() {
  document
    .querySelector(
      'path[d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"]'
    )
    .parentElement.parentElement.parentElement.click(); // a lot of parentElement but it is difficult to select the correct button without it
}

function emptyWatchLaterList() {
  console.log(
    document.querySelectorAll(videosInListSelector).length + ' videos left'
  );

  if (!document.querySelectorAll(videosInListSelector).length) {
    console.log('job finished1');
    clearInterval(interval);
    return;
  }

  clickFirstVideo();

  setTimeout(() => {
    clickDeleteButton();
  }, speed / 2);
}

const interval = setInterval(emptyWatchLaterList, speed);
