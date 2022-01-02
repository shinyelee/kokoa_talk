const openIcon = document.getElementById("modal-open");
const modal = document.querySelector(".modal");
const openModal = () => {
  modal.classList.remove("hidden");
};
openIcon.addEventListener("click", openModal);
