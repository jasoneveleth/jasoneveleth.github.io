iOS()

function iOS() {
    console.log("here")
    let user = navigator.userAgent;
    // if (user.includes("iPhone") || user.includes("Andriod")) {
        let bottom = document.getElementById("bottom");
        let higher = document.getElementById("top");
        higher.style.top = "auto";
        higher.style.left = "auto";
        higher.style.position = "static";
        higher.style.transform = "none";


        bottom.insertBefore(higher, bottom.children[0]);
        higher.classList.add('item');
        bottom.style.flexDirection = 'column';

        let children = bottom.children;
        for (let c of children) {
            c.style.margin = "auto";
        }

        children = document.getElementsByClassName("item");
        for (c of children) {
            c.style.width = "70%";
        }
        bottom.style.bottom = "unset";
        bottom.style.top = "0";
    // } else {
    //     // Do something
    // }
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