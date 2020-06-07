document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("text-wrapper").onclick = function(event) {
        alert("You clicked text!");
    };
});

function yee(id) {
    let list = document.getElementsByClassName('link');
    for (let ele of list) {
        ele.style.opacity = "0.5";
    }
    document.getElementById(id).style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("arrow").onclick = (event) => {
        document.getElementById('bottom').scrollIntoView();
    };
});
