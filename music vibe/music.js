// console.log("welcome to musicplayer")
// let songIndex=0;
// let audioElement=new Audio('songs/1.mp3');
// let gif=document.querySelector('#gif')
// let masterPlay=document.getElementById('masterPlay')
// let myProgressBar=document.getElementById('myProgressBar');
// let songItems=Array.from(document.getElementsByClassName('songItem'))

// let song=[
//     {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"song/2.mp3", coverPath:"covers/2.jpg"}, 
//     {songName:"Salam-e-Ishq", filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"song/5.mp3", coverPath:"covers/5.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"song/6.mp3", coverPath:"covers/6.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"song/7.mp3", coverPath:"covers/7.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"song/8.mp3", coverPath:"covers/8.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"song/9.mp3", coverPath:"covers/9.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"song/10.mp3", coverPath:"covers/10.jpg"},
// ]
// songItems.forEach((element,i) => {
//     console.log(element,i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
 
//  //handle play/pause click
// //listen to events

// masterPlay.addEventListener("click",()=>{
//     if(audioElement.paused||audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity=1;
//     }else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-circle-pause');
//         masterPlay.classList.add('fa-circle-play');
//         gif.style.opacity=0;
//     }
// })
// audioElement.addEventListener("timeupdate",()=>{
//     console.log('timeupdate');
//     // upadet seekbar
//     progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
//     console.log(progress);
//     myProgressBar.value = progress;

// })
// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime=myProgressBar.value * audioElement.duration/100;

// })


// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

// console.log("Welcome to musicplayer");
// let songs=[
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/1.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/2.jpg"}, 
//     {songName:"Salam-e-Ishq", filePath:"songs/13.mp3", coverPath:"covers/3.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/4.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/5.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/6.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/7.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/8.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/9.jpg"},
//     {songName:"Salam-e-Ishq", filePath:"songs/12.mp3", coverPath:"covers/10.jpg"},
// ]

// // Initialize the Variables
// let songIndex = 0;
// let audioElement = new Audio(songs[songIndex].filePath);
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));




// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
 

// // Handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
// // Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{ 
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

// MAINMAIAN MAIN MAIN 

console.log("Welcome to musicplayer");
// Song List
let songs = [
    { songName: "aaj ki raat", filePath: "songs/AAJ KI RAAT.mp3", coverPath: "covers/1.jpg" },
    { songName: "puspa 2 kissik", filePath: "songs/KISS.mp3", coverPath: "covers/2.jpg" },
    { songName: "C6hanna Mereya", filePath: "songs/13.mp3", coverPath: "covers/3.jpg" },
    { songName: "Bekhayali", filePath: "songs/1.mp3", coverPath: "covers/4.jpg" },
    { songName: "Raabta", filePath: "songs/2.mp3", coverPath: "covers/5.jpg" },
    { songName: "Kabira", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Phir Bhi Tumko ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Agar Tum Saath Ho", filePath: "songs/9.mp3", coverPath: "covers/8.jpg" },
    { songName: "PUSPA 2 KISSIK", filePath: "songs/KISS.mp3", coverPath: "covers/9.jpg" },
    { songName: "Dil Dhadakne Do", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" }

];

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



// Set song list details
songItems.forEach((element, i) => {
    if (songs[i]) {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    }
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

let lodin=document.getElementById("lodin")

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Play individual songs
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = i; // Set song index
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath; // Use filePath directly
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

// Handle Next Button
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length; // Loop back to start
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// Handle Previous Button
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop to last song if at start
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// let cont=document.getElementById("container")
// console.log(cont)


// cont.addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log("clicked")
//     cont.innerHTML()
// })
