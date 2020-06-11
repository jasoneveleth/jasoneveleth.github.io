// These two functions dim the links icons
function yee(id) {
    let list = document.getElementsByClassName('icon');
    for (let ele of list) {
        ele.style.opacity = "0.5";
    }
    document.getElementById(id).style.opacity = "1";
}

function reset() {
    let list = document.getElementsByClassName('icon');
    for (let ele of list) {
        ele.style.opacity = "1";
    }
}

document.addEventListener("DOMContentLoaded", iOS());
window.addEventListener("resize", changeStyle);

function iOS() {
    let user = navigator.userAgent;
    if (user.includes("iPhone") || user.includes("Android")) {
        document.getElementsByTagName('html')[0].style.fontSize = "120%";
        mobile()

        // Disabling hover functionality
        for (let e of document.getElementsByTagName('a')) {
            e.onmouseover = "";
        }
        let hovers = document.getElementsByClassName('hover-able');
        while (hovers[0]) {
            hovers[0].classList.remove('hover-able');
        }
    }
}

function changeStyle() {
    if (document.documentElement.clientWidth * 1.5 < document.documentElement.clientHeight) {
        mobile()
    } else {
        desktop()
    }
}

function mobile() {
    let fullscreen = document.getElementById("fullscreen");
    fullscreen.style.backgroundColor = "#000";
    fullscreen.style.top = "initial";
    fullscreen.style.width = "90%";
    fullscreen.style.left = "50%";
    fullscreen.style.padding = "1rem 5%";
    fullscreen.style.margin = "0";
    fullscreen.style.transform = "translate(-50%,0%)";
}

function desktop() {
    let fullscreen = document.getElementById("fullscreen");
    fullscreen.style.backgroundColor = "initial";
    fullscreen.style.top = "50%";
    fullscreen.style.width = "initial";
    fullscreen.style.left = "75%";
    fullscreen.style.padding = "initial";
    fullscreen.style.margin = "initial";
    fullscreen.style.transform = "translate(-50%, -50%)";
}
