console.log(true)
document.querySelector("div").addEventListener("mousemove", runEvent);

function runEvent(e) {
    document.querySelector("h1").textContent = `X : ${e.offsetX} Y : ${e.offsetY}`
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`
};

