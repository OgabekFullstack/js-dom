roundElement = document.querySelector(".round-number");
winOne = document.querySelector(".win1");
winTwo = document.querySelector(".win2");
tiesElement = document.querySelector(".ties");
resultImgElement = document.querySelector(".result-img");
btnOneElement = document.querySelector(".btn-one");
btnTwoElement = document.querySelector(".btn-two");
btnThreeElement = document.querySelector(".btn-three");
btnElement = document.querySelectorAll(".btn");

let result = 0
for(let i = 0; i < btnElement.lenght; i++) {
    btnElement[i].addEventListener("click", function(e) {
        let random = Math.floor(Math.random()*3);
        result += 1
        console.log(result)
    });
};





