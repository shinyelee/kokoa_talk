const openIcon = document.getElementById("modal-open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const closeIcon = modal.querySelector(".fa-arrow-left");
const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);
openIcon.addEventListener("click", openModal);
