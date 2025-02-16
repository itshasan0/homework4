const coordinatesDisplay = document.getElementById("coordinates");

document.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;

    coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;

    if (x > 500) {
        coordinatesDisplay.style.color = "red";
    } else {
        coordinatesDisplay.style.color = "black";
    }
});
