openModal = document.querySelector(".open-modal");
closeModal = document.querySelector(".close-modal");
modalWrapper = document.querySelector(".modal-wrapper");

openModal.addEventListener("click", function(e) {
    modalWrapper.style.display = "flex"
});
closeModal.addEventListener("click", function(e) {
    modalWrapper.style.display = "none"
})