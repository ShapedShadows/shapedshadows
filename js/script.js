var n = 0;

function moreinfo() {
    if (n == 0) {
        document.getElementById("more").style.display = "block";
        n = 1;
    } else {
        document.getElementById("more").style.display = "none";
        n = 0
    }
}

function love(){
    document.getElementById("love").style.display = "block";
}

function unlove() {
    document.getElementById("love").style.display = "none";
}

var countDownDate = new Date("Aug 15, 2021 21:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  if (distance > 0 && days == 0 && hours == 0){
    var bl = 3 + (minutes / 10);
    document.getElementById("cov").style.webkitFilter = "blur(" + bl + "px)";
  }  
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "NEW ALBUM IS PUBLISHED";
    document.getElementById("cov").style.webkitFilter = "blur(0px)";
  }
}, 1000);

function copy() {
    var copyText = "sadshapedshadows@gmail.com";
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("window").style.display = "block";
    setInterval(function(){
        document.getElementById("window").style.display = "none";
    }, 3000);
}
