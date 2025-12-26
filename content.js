let wasPlaying = false;

const videoPlayerId = "movie_player"
const playBtnClass = 'ytp-play-button';
const playingClass = 'playing-mode';

document.addEventListener("visibilitychange", () => {
  chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
    if(!enabled) return;
    const video = document.getElementById(videoPlayerId);
    let playBtn = document.getElementsByClassName(playBtnClass)[0];
    if (!video || !playBtn) return;

    wasPlaying = video.classList.contains(playingClass);

    if(document.hidden && wasPlaying) playBtn.click()
  });
});