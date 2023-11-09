function Home(){
  document.getElementById("home-page").style.removeProperty("display")
  document.getElementById("log-in-page").style.display="none"
  document.getElementById("home").style.backgroundColor="rgb(232,235,235)"
  document.getElementById("home").style.border=" .5px solid #8a8a8a"
  document.getElementById("play2").style.display="none"
  document.getElementById("play1").style.removeProperty("display")
  document.getElementById("play2").style.removeProperty("display")
  document.getElementById("log-in").style.removeProperty("background")
  document.getElementById("log-in").style.removeProperty("border")
}
window.addEventListener("load",Home)

function logIn(){
  document.getElementById("log-in-page").style.removeProperty("display")
  document.getElementById("home-page").style.display="none"
  document.getElementById("home").style.removeProperty("border")
  document.getElementById("home").style.removeProperty("background")
  v1.pause()
  v2.pause()
  document.getElementById("log-in").style.backgroundColor="rgb(232,235,235)"
  document.getElementById("log-in").style.border=".5px solid #8a8a8a"
  
  
}
function pauseV2(){
  v2.pause()
}
function pauseV1(){
  v1.pause()
}

function playV1(){
  v1.play()
  document.getElementById("play1").style.display="none"
  document.getElementById("play2").style.removeProperty("display")
}
function playV2(){
  v2.play()
  document.getElementById("play2").style.display="none"
  document.getElementById("play1").style.removeProperty("display")
}