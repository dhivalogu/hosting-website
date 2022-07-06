var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var sidenav = document.querySelector(".mobile-nav");
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

backdrop.addEventListener("click", closeModal);
modalNoButton.addEventListener("click", closeModal);

function closeModal() {
  backdrop.classList.remove("open");
  modal.classList.remove("open");
  sidenav.classList.remove("open");
}

function toggleButton() {
  backdrop.classList.add("open");
  sidenav.classList.add("open");
}
