iOS()

function iOS() {
    console.log("here")
    let user = navigator.userAgent;
    if (user.includes("iPhone") || user.includes("Andriod")) {
        let bottom = document.getElementById("bottom");
        let higher = document.getElementById("top");
        bottom.children[0].insertBefore(higher);
        document.body.removeChild(document.body.children[0]);
        higher.classList.add('item');
        bottom.style.flexDirection = 'column'
    } else {
        // Do something
    }
}

function yee(id) {
    let list = document.getElementsByTagName('svg');
    for (let ele of list) {
        ele.style.opacity = "0.5";
    }
    document.getElementById(id).style.opacity = "1";
}

function reset() {
    let list = document.getElementsByTagName('svg');
    for (let ele of list) {
        ele.style.opacity = "1";
    }
}