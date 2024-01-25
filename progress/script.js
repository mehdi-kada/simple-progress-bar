
const circles = document.querySelectorAll('.circle');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');
const progress = document.querySelector('.progress');

let currentCircle = 1;

next.addEventListener('click', () => {
  currentCircle++;

  if (currentCircle > circles.length) {
    currentCircle = circles.length;
  }


  update();
});
prev.addEventListener('click', () => {
  currentCircle--;

  if (currentCircle < 1) {
    currentCircle = 1;
  }

  update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentCircle) {
        circle.classList.add('active');
        } else {
        circle.classList.remove('active');
        }
    });
    const actives = document.querySelectorAll('.active');
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
        if (currentCircle === circles.length) {
            next.disabled = true;
        } else if (currentCircle === 1) {
            prev.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = false;
        }
    }
    


