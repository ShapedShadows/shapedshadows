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