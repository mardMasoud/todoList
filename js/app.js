const songs = [
  {
    singer: "Reza Yazdani",
    songName: "Tehran",
    song: "songs/09 Tehran Tehran.mp3",
    cover: "images/singer/Reza-Yazdani-400x400.jpg",
  },
  {
    singer: "Mohsen Chavoshi",
    songName: "Rahayam Kon",
    song: "songs/Mohsen Chavoshi - Rahayam Kon [128].mp3",
    cover: "images/singer/The-Best-of-Mohsen-Chavoshi-400x400.jpg",
  },
  {
    singer: "Sirvan khosravi",
    songName: "Tanha Nazar",
    song: "songs/Sirvan Khosravi - Tanha Nazar (128).mp3",
    cover: "images/singer/Sirvan-Khosravi-400x400.jpg",
  },
];
let songsIndex = 2;
const imgElm = document.querySelector("img");
const songName = document.querySelector("#song-name");
const singerName = document.querySelector("#singer");
imgElm.setAttribute("src", songs[2].cover);
const playElm = document.querySelector(".fa-play");
const nextElm = document.querySelector(".fa-fast-forward");
songName.innerHTML = songs[2].songName;
singerName.innerHTML = songs[2].singer;
const audioElm = document.querySelector("audio");
let progersElm=document.querySelector('.progers')
let spanElm= document.querySelector('span')
let songTime
function calculateTime() {
    audioElm.addEventListener('loadedmetadata', () => {
     songTime = Math.floor(audioElm.duration);
      let sMinute = Math.floor(songTime / 60);
      let sSecond = songTime - sMinute * 60;
      if (sSecond < 10) {
        sSecond = '0' + sSecond;
      }
      y=songTime
      console.log(songTime);
    });
  }
  calculateTime()
  let neww1=0
  let neww=0
function plyMusic() {
  audioElm.setAttribute("src", songs[songsIndex].song);
 
  songName.innerHTML = songs[songsIndex].songName;
  imgElm.setAttribute("src", songs[songsIndex].cover);
  singerName.innerHTML = songs[songsIndex].singer;
  let x= songTime*10
  audioElm.play();
  playElm.className = "fas fa-pause-circle";
   
  const timer=setInterval(() => {
    spanElm.innerHTML=y
    if(neww1<songTime){
        neww1=neww1+1
        neww=neww+(1/(songTime/100))
       progersElm.style.width=neww+'%'
        console.log(neww1);
       y=y-1
        
    }
    else{

       
        clearInterval(timer)
    }
    
}, 1000);

 
}




playElm.addEventListener("click", function () {
  if (playElm.className === "fas fa-play") {
    plyMusic();
  } else {
    audioElm.pause();
    playElm.className = "fas fa-play";
  }
});
nextElm.addEventListener("click", function () {
  songsIndex += 1;
  playElm.className = "fas fa-play";
  if (songsIndex < 3) {
    plyMusic();
  } else {
    songsIndex = 0;
    plyMusic();
  }
});
