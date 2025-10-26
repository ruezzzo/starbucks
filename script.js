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



document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.buttons-bottom');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'rotate(5deg) scale(1.3)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'rotate(0deg) scale(1)';
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buttons-bottom");

  buttons.forEach((button) => {

    const knife = document.createElement("img");
    knife.src = "./media/page 3/persona-knife.png"; 
    knife.className = "knife";
    document.body.appendChild(knife); 


    Object.assign(knife.style, {
      position: "fixed",
      width: "30px",
      height: "30px",
      transformOrigin: "center",
      transition: "none",
      pointerEvents: "none",
      opacity: "0",
      zIndex: "1000",
    });


    button.addEventListener("mouseenter", () => {
      const onTransitionEnd = () => {
        const rect = button.getBoundingClientRect();
        const activeCard = document.querySelector(".card.active");
        if (!activeCard) return;

        const startX = rect.right + 400;
        const startY = rect.top - 400;

        knife.style.transition = "none";
        knife.style.left = `${startX}px`;
        knife.style.top = `${startY}px`;
        knife.style.transform = "scale(1) rotate(-40deg)";
        knife.style.opacity = "1";

        requestAnimationFrame(() => {
          knife.style.transition = "all 0.15s cubic-bezier(0.3, 0.8, 0.2, 1.1)";
          const targetX = rect.right - knife.offsetWidth * 0.3;
          const targetY = rect.top - knife.offsetHeight * 0.2;
          knife.style.left = `${targetX}px`;
          knife.style.top = `${targetY}px`;
          knife.style.transform = "scale(3.5) rotate(15deg)";
        });

        button.removeEventListener("transitionend", onTransitionEnd);
      };

      button.addEventListener("transitionend", onTransitionEnd);
    });


    button.addEventListener("mouseleave", () => {
      knife.style.transition = "none";
      knife.style.opacity = "0";
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const coffee = document.querySelector(".coffe-star");
  let angle = 0;
  let scale = 1;
  let direction = 1;
  let grow = true;

  function animate() {
   
    angle += 0.1 * direction; 
    if (angle > 5 || angle < -5) direction *= -1;


    if (grow) {
      scale += 0.0005; 
      if (scale >= 1.05) grow = false;
    } else {
      scale -= 0.0005;
      if (scale <= 1.0) grow = true;
    }

    coffee.style.transform = `rotate(${angle}deg) scale(${scale})`;

    requestAnimationFrame(animate);
  }

  animate();
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".New-Cafe");
  const lines = [
    { text: "New Cafe", className: "gradient3-text" },
    { text: "by StarBucks", className: "white-text" }
  ];

  container.innerHTML = "";

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      const { text, className } = lines[lineIndex];
      const p = document.createElement("p");
      p.classList.add(className);
      container.appendChild(p);

      const interval = setInterval(() => {
        p.textContent = text.slice(0, charIndex);
        charIndex++;

        if (charIndex > text.length) {
          clearInterval(interval);
          lineIndex++;
          charIndex = 0;
          setTimeout(typeLine, 500);
        }
      }, 60);
    }
  }

  typeLine();
});

