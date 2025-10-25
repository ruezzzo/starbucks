document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const arrow = document.querySelector(".strelka");
  let currentIndex = 0;

  function updateCards() {
    cards.forEach((card, index) => {
      const offset = index - currentIndex;
      card.style.transform = `translateX(${offset * 50}px) scale(${index === currentIndex ? 1 : 0.9})`;
      card.classList.toggle("active", index === currentIndex);


      card.style.opacity = index === currentIndex ? "1" : "0.6";
    });
  }

  arrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  });

  updateCards(); 
});
