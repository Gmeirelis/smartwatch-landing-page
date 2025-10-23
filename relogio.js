const carrossel = document.querySelector(".carrossel");
const next = document.querySelector(".btn-next");

let scrollPos = 0;
const cardWidth = 270; // largura do card + gap aproximado

next.addEventListener("click", () => {
  scrollPos -= cardWidth;

  // Se chegar no final, volta para o início
  if (Math.abs(scrollPos) >= carrossel.scrollWidth - carrossel.offsetWidth) {
    scrollPos = 0;
  }

  carrossel.style.transform = `translateX(${scrollPos}px)`;
});
