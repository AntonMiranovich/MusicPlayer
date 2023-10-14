const imgCover = document.querySelector(".imgCover"),
  artist = document.querySelector(".artist"),
  yandex = document.querySelector(".yandex"),
  nameOfSong = document.querySelector(".nameOfSong"),
  tameline = document.querySelector(".tameline"),
  stripe = document.querySelector(".stripe"),
  time = document.querySelector(".time"),
  repiat = document.querySelector(".repiat"),
  back = document.querySelector(".back"),
  play = document.querySelector(".play"),
  next = document.querySelector(".next"),
  like = document.querySelector(".like"),
  audio = document.querySelector("audio");

const songs = [
  {
    id: 1,
    path: "./songs/beatles.mp3",
    artist: "The Beatles",
    nameSong: "Yesterday",
    songCover: "background-image:url(./img/beatles.jpg)",
    url: "https://music.yandex.by/album/5826604/track/43717991",
  },
  {
    id: 2,
    path: "./songs/frank.mp3",
    artist: "Frank Sinatra",
    nameSong: "New York,New York",
    songCover: "background-image:url(./img/frank.jpg)",
    url: "https://music.yandex.by/album/1037526/track/9746581",
  },
  {
    id: 3,
    path: "./songs/had.mp3",
    artist: "Haddaway",
    nameSong: "What is love",
    songCover: "background-image:url(./img/haddaway.jpg)",
    url: "https://music.yandex.by/album/520954/track/4639223",
  },
];

let flag = false;
let songIndex = 0;

(function startPlayer() {
  audio.src = songs[songIndex].path;
  artist.textContent = songs[songIndex].artist;
  nameOfSong.textContent = songs[songIndex].nameSong;
  imgCover.style = songs[songIndex].songCover;
})();

play.addEventListener("click", () => {
  audio.src = songs[songIndex].path;
  artist.textContent = songs[songIndex].artist;
  nameOfSong.textContent = songs[songIndex].nameSong;
  imgCover.style = songs[songIndex].songCover;
  if (flag == false) {
    audio.play();
    play.style = "background-image:url(./assets/pause.svg)";
    flag = true;
  } else {
    audio.pause();
    flag = false;
    play.style = "background-image:url(./assets/play.png)";
  }
});

back.addEventListener("click", () => {
  if (songIndex == 0) songIndex = 3;
  songIndex--;
  artist.textContent = songs[songIndex].artist;
  nameOfSong.textContent = songs[songIndex].nameSong;
  imgCover.style = songs[songIndex].songCover;
  audio.src = songs[songIndex].path;
  audio.play();
  flag = true;
  play.style = "background-image:url(./assets/pause.svg)";
});

next.addEventListener("click", () => {
  if (songIndex == songs.length - 1) songIndex = -1;
  songIndex++;
  artist.textContent = songs[songIndex].artist;
  nameOfSong.textContent = songs[songIndex].nameSong;
  imgCover.style = songs[songIndex].songCover;
  audio.src = songs[songIndex].path;
  audio.play();
  flag = true;
  play.style = "background-image:url(./assets/pause.svg)";
});

yandex.addEventListener('mouseover',()=>{
  yandex.style="background-image:url(./assets/yandexColor.svg)";
  yandex.style.width='23.2px';
  yandex.style.height='23.2px'
})

yandex.addEventListener('mouseout',()=>{
  yandex.style="background-image:url(./assets/yandexMusic.svg)";
})

yandex.addEventListener("click", () => {
  window.open(songs[songIndex].url);
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  stripe.style.width = `${progress}%`;

  const timeSong = audio.currentTime;

  const timeSongMin = Math.floor(timeSong / 60);
  const timeSongMSec = Math.floor(timeSong % 60);

  const min = timeSongMin < 10 ? `0${timeSongMin}` : `${timeSongMin}`;
  const sec = timeSongMSec < 10 ? `0${timeSongMSec}` : `${timeSongMSec}`;
  time.innerHTML = `${min}:${sec}`;
});

tameline.addEventListener("click", (event) => {
  audio.currentTime = (event.offsetX / tameline.clientWidth) * audio.duration;
});

audio.addEventListener("ended", () => {
  if (songIndex == songs.length - 1) songIndex = -1;
  songIndex++;
  artist.textContent = songs[songIndex].artist;
  nameOfSong.textContent = songs[songIndex].nameSong;
  imgCover.style = songs[songIndex].songCover;
  audio.src = songs[songIndex].path;
  audio.play();
  flag = true;
  play.style = "background-image:url(./assets/pause.svg)";
});

repiat.addEventListener("click", () => {
  audio.src = songs[songIndex].path;
  audio.play();
  flag = true;
  play.style = "background-image:url(./assets/pause.svg)";
  repiat.classList.add("box_animation");
});

repiat.addEventListener("animationend", () => {
  repiat.classList.remove("box_animation");
},false);

let flagLike = false;

like.addEventListener("click", () => {
  if (flagLike == false) {
    like.style = "background-image:url(./assets/Icon.svg)";
    like.style.width='18.9px';
    like.style.height='15.9px'
    like.style.margin='29px 0 0 58px'
    flagLike = true;
  } else {
    like.style = "background-image:url(./assets/nolike.png)";
    flagLike = false;
  }
});
