const reveals = document.querySelectorAll('.reveal');
const progress = document.getElementById('scrollProgress');

function revealOnScroll(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 120){
      el.classList.add('active');
    }
  });
}

function updateProgress(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const width = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = width + '%';
}

const typedName = document.getElementById('typedName');
const text = 'Nalina';
let i = 0;
function typeName(){
  typedName.textContent = text.slice(0, i);
  i++;
  if(i <= text.length){
    setTimeout(typeName, 140);
  }
}

const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - .5) * -10;
    const rotateY = ((x / rect.width) - .5) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = '';
  });
});

window.addEventListener('scroll', ()=>{
  revealOnScroll();
  updateProgress();
});
window.addEventListener('load', ()=>{
  revealOnScroll();
  updateProgress();
  typedName.textContent = '';
  typeName();
});
