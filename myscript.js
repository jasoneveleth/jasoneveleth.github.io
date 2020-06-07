function yee(id) {
    let list = document.getElementsByClassName('link');
    for (let ele of list) {
        ele.style.opacity = "0.5";
    }
    document.getElementById(id).style.opacity = "1";
}

function reset() {
    let list = document.getElementsByClassName('link');
    for (let ele of list) {
        ele.style.opacity = "1";
    }
}

