document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("text").onclick = function(event) {
        alert("You clicked text!");
    };
});

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("quote").onclick = function(event) {
        alert("This was my senior quote");
    };
});

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("arrow").onclick = function(event) {
        document.getElementById('bottom').scrollIntoView();
    };
});
