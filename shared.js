let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButtons = document.querySelectorAll(".plan button");
let modalNoButton = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let ctaButton = document.querySelector(".main-nav__item--cta");

// console.log(backdrop);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

ctaButton.addEventListener('animationstart', () => {
  console.log('Animation started', event);
});
ctaButton.addEventListener('animationend', () => {
  console.log('Animation ended', event);
});
ctaButton.addEventListener('animationiteration', () => {
  console.log('Animation iteration', event);
});