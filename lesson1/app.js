let body = document.querySelector("body");

let ulElement = document.createElement("ul");
// home

let homeLiElement = document.createElement("li");
let homeElement = document.createElement("a");
homeElement.setAttribute("href", "#home");
homeElement.textContent = 'Home'
// news

let newsLiElement = document.createElement("li");
let newsElement = document.createElement("a");
newsElement.setAttribute("href", "#news");
newsElement.textContent = 'News'
// contact

let contactLiElement = document.createElement("li");
let contactElement = document.createElement("a");
contactElement.setAttribute("href", "#contact");
contactElement.textContent = 'Contact'
// about

let aboutLiElement = document.createElement("li");
let aboutElement = document.createElement("a");
aboutElement.setAttribute("href", "#about");
aboutElement.textContent = 'About'

// Appenchild's
ulElement.appendChild(homeLiElement);
ulElement.appendChild(newsLiElement);
ulElement.appendChild(contactLiElement);
ulElement.appendChild(aboutLiElement);

homeLiElement.appendChild(homeElement);
newsLiElement.appendChild(newsElement);
contactLiElement.appendChild(contactElement);
aboutLiElement.appendChild(aboutElement);
document.body.appendChild(ulElement);


//Styles
ulElement.setAttribute("style", "list-style-type: none;margin: 0;padding: 0;overflow: hidden;background-color: #c4c4c4;")

document.querySelectorAll("li").forEach(function (a) {
    a.setAttribute("style", "float: left;");
});
document.querySelectorAll("a").forEach(function (a) {
    a.setAttribute("style", "display: block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;");

    a.addEventListener("mouseenter", function (h){
        h.target.setAttribute("style", "display: block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;background-color: #111")
    });
    a.addEventListener("mouseleave", function (h){
        h.target.setAttribute("style", "display: block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;")
    });
});
// Event
document.querySelectorAll("li").forEach(function (a) {
    a.addEventListener("click", function(e) {

        document.querySelectorAll("li").forEach(function (deleteActive) {
            deleteActive.classList.remove("active");            
        });

        e.currentTarget.className = "active";
    });
});
