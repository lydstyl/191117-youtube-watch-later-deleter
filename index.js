//Paste this code in your console when you are in your Watch later list page if you whant to delete it

setInterval(() => {
  document
    .querySelector('.style-scope ytd-playlist-video-renderer button')
    .click();

  document
    .querySelectorAll('.style-scope ytd-menu-service-item-renderer')[2]
    .click();
}, 100);
