 var mysong = document.getElementById("autosong");
 var playicon = document.getElementById("playbtn");
 var stopicon = document.getElementById("stopbtn");

// IMAGE CHANGER

var live = document.getElementById("current_song_image");

// Playlist bar

// var english = document.getElementsByClassName(".music_1body");
// var hindi = document.getElementsByClassName(".music_2body");
// var Daily = document.getElementsByClassName(".music_3body");
// var Liked  = document.getElementsByClassName(".music_4body");
// var Punjabi = document.getElementsByClassName(".music_5body");


// SONGS

var teresiva  = document.getElementById("s11");
var warr = document.getElementById("s22");
var sau = document.getElementById("s33");
var levi = document.getElementById("s44");
var rabba = document.getElementById("s55");
var kinna = document.getElementById("s66");
var watr = document.getElementById("s77");
var animals = document.getElementById("s88");
var just = document.getElementById("s99");
var vac = document.getElementById("s100");
var stars = document.getElementById("s111");
var gym = document.getElementById("s112");

// SONG NAME LINKS FOR ONN  

 var so1 = document.getElementById("s1");
 var so2 = document.getElementById("s2");
 var so3 = document.getElementById("s3");
 var so4= document.getElementById("s4");
 var so5 = document.getElementById("s5");
 var so6 = document.getElementById("s6");
 var so7 = document.getElementById("s7");
 var so8 = document.getElementById("s8");
 var so9 = document.getElementById("s9");
 var so10 = document.getElementById("s10");
 var so11 = document.getElementById("s11");
 var so12 = document.getElementById("s12");


//  BUTTON FOR PAUSE INDV SONGS

var st1 = document.getElementById("stop1");
var st2 = document.getElementById("stop2");
var st3 = document.getElementById("stop3");
var st4 = document.getElementById("stop4");
var st5 = document.getElementById("stop5");
var st6 = document.getElementById("stop6");
var st7 = document.getElementById("stop7");
var st8 = document.getElementById("stop8");
var st9 = document.getElementById("stop9");
var st10 = document.getElementById("stop10");
var st11 = document.getElementById("stop11");
var st12 = document.getElementById("stop12");


// Songs Play Button

playicon.onclick = function()
{
     mysong.play();
     live.src = "2highonlife.jpg";
     document.getElementById("live_name").innerHTML = " Trampholline";
}
so1.onclick = function()
{
  teresiva.play();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai1").innerHTML = "DONT PLAY THIS SONG GO FOR NXT ONE";
  document.getElementById("live_name").innerHTML = "Tere Siva";
  live.src = "Tere Siva.jpg";
}
so2.onclick = function () {
  warr.play();
  teresiva.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai2").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Imagine Dragons - Warriors";
  live.src = "warriors.jpg";
}
so3.onclick = function () {
  sau.play();
  teresiva.pause();
  warr.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai3").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML ="Tere Siva - Darshan Raval | Official Music Video 2016";
  live.src = "sauasma.jpg";
}
so4.onclick = function () {
  levi.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai4").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Levigating -Dua Lipa";
  live.src = "levigating.jpg";
}
so5.onclick = function () {
  rabba.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai5").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML ="Rabba Mehar Kari - Darshan Raval";
  live.src = "Rabba Mehar Kari.jpg";
}
so6.onclick = function () {
  kinna.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai6").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Kinna Sona";
  live.src = "Rabba Mehar Kari.jpg";
}
so7.onclick = function () {
  watr.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai7").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML ="Harry Styles - Watermelon Sugar";
  live.src = "watermelons.jpg";
}
so8.onclick = function () {
  animals.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  just.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai8").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Maroon 5 - Animals";
  live.src = "maroon 5 animals.jpg";
}
so9.onclick = function () {
  just.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  vac.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai9").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Just Two Of Us";
  live.src = "just the 2 of usss.jpg";
}
so10.onclick = function () {
  vac.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  stars.pause();
  gym.pause();
  document.getElementById("plai10").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Vacation";
  live.src = "Vacation-feat-Veronica.jpg";
}
so11.onclick = function () {
  stars.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  gym.pause();
  document.getElementById("plai11").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Counting Star";
  live.src = "";
};
so12.onclick = function () {
  gym.play();
  teresiva.pause();
  warr.pause();
  sau.pause();
  levi.pause();
  rabba.pause();
  kinna.pause();
  watr.pause();
  animals.pause();
  just.pause();
  vac.pause();
  stars.pause();
  document.getElementById("plai12").innerHTML = "Playing....";
  document.getElementById("live_name").innerHTML = "Levigating -Dua Lipa";
  live.src = "watermelons.jpg";
};

// SONG PAUSE BUTTON

stopicon.onclick = function () 
{
  mysong.pause();
};
st1.onclick = function () {
  teresiva.pause();
  document.getElementById("plai2").innerHTML = "";
};

st2.onclick = function () {
  warr.pause();
  document.getElementById("plai2").innerHTML = "";
};
st3.onclick = function () {
  sau.pause();
  document.getElementById("plai3").innerHTML = "";
};
st4.onclick = function () {
  levi.pause();
  document.getElementById("plai4").innerHTML = "";
};
st5.onclick = function () {
  rabba.pause();
  document.getElementById("plai5").innerHTML = "";
};
st6.onclick = function () {
  kinna.pause();
  document.getElementById("plai6").innerHTML = "";
};
st7.onclick = function () {
  watr.pause();
  document.getElementById("plai7").innerHTML = "";
};
st8.onclick = function () {
  animals.pause();
  document.getElementById("plai8").innerHTML = "";
};
st9.onclick = function () {
  just.pause();
  document.getElementById("plai9").innerHTML = "";
};
st10.onclick = function () {
  vac.pause();
  document.getElementById("plai10").innerHTML = "";
};
st11.onclick = function () {
  stars.pause();
  document.getElementById("plai11").innerHTML = "";
};
st12.onclick = function () {
  gym.pause();
  document.getElementById("plai12").innerHTML = "";
};



// Songs play list onclick functions

function english() {
  window.open("english.html","_self");
};
function hindi() {
  window.open("hindi.html","_self");
};
function daily() {
  window.open("dailymix.html", "_self");
};
function liked() {
  window.open("liked.html", "_self");
};
function punjabi() {
  window.open("punjabi.html", "_self");
};



teresiva.pause();
warr.pause();
sau.pause();
levi.pause();
rabba.pause();
kinna.pause();
watr.pause();
animals.pause();
just.pause();
vac.pause();
stars.pause();
gym.pause();