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

window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth * 1.5 < document.documentElement.clientHeight) {
        fullscreen = document.getElementById("fullscreen");
        fullscreen.style.backgroundColor = "#fff";
        fullscreen.style.marginBottom = String(document.documentElement.clientHeight);
        fullscreen.style.width = "100%";
        fullscreen.style.left = "50%";
        fullscreen.style.transform = "translate(-50%,0%)";
    }
    else {
        fullscreen = document.getElementById("fullscreen");
        fullscreen.style.top = "50%";
        fullscreen.style.left = "75%";
        fullscreen.style.position = "absolute";
        fullscreen.style.transform = "translate(-50%, -50%)";
    }
});

function iOS() {
    console.log("here")
    let user = navigator.userAgent;
    if (user.includes("iPhone") || user.includes("Andriod")) {
        // Gets references to shuffle elememts around
        let bottom = document.getElementById("bottom");
        let higher = document.getElementById("top");
        higher.style.top = "auto";
        higher.style.left = "auto";
        higher.style.position = "static";
        higher.style.transform = "none";

        // Adds the 'higher' div text to the bottom div (in front)
        bottom.insertBefore(higher, bottom.children[0]);
        higher.classList.add('item');
        bottom.style.flexDirection = 'column';

        // This centers the elements in the 'bottom' div
        let children = bottom.children;
        for (let c of children) {
            c.style.margin = "auto";
        }

        children = document.getElementsByClassName("item");
        for (c of children) {
            c.style.width = "70%";
        }
        
        for (c of document.getElementsByTagName('p')) {
            c.style.fontSize = "1.5em";
        }
        for (c of document.getElementsByTagName('h1')) {
            c.style.fontSize = "2em";
        }

        let newDiv = document.createElement("div");
        document.body.insertBefore(newDiv, bottom);
        newDiv.style.height = "100%";
        newDiv.style.width = "100%";
        bottom.style.position = "unset";
        bottom.style.paddingTop = "10%";
        bottom.scrollIntoView();
        for (c of document.getElementById('contact').children) {
            c.onmouseover = "";
        }
    }
}

