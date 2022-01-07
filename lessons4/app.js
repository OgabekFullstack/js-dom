let empties = document.querySelectorAll(".empty");
let fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart(e) {
    e.target.parentElement.classList.add("hold");
    setTimeout(function() {
        e.target.classList.add("visible");
    }, 0);
};
function dragEnd(e) {
    e.target.parentElement.classList.remove("hold");
    e.target.classList.remove("visible");
};

for(let empty of empties) {
    empties.forEach(function(empty) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
    }); 
};


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("hovered")
};
function dragOver(e) {
    e.preventDefault();
};
function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove("hovered")
}
function dragDrop(e) {
    e.preventDefault();
    e.target.appendChild(fill)
    empties.forEach(function(empty) {
        empty.className = "empty";
    });
};










