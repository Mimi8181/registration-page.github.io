const body = document.querySelector("body");

let meteorNumber = 25;
for (let i = 1; i <= meteorNumber; i++) {
  body.innerHTML += `<div class="meteor-${i}"></div>`;
}


let typed = new Typed('.auto-input',{
  strings: ['Please fill the form to create an account', 'Thank you'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
})