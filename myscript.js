window.addEventListener('load', function() {
    document.getElementById("text").onclick = function(event) {
        alert("You clicked text!");
    };
});

window.addEventListener('load', function() {
    document.getElementById("quote").onclick = function(event) {
        alert("This was my senior quote");
    };
});

window.addEventListener('load', function() {
    document.getElementById("arrow").onclick = function(event) {
        document.getElementById('bottom').scrollIntoView();
    };
});