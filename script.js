const clickMobile = document.getElementById('menu')

function changeMenu () {
  const nav = document.getElementById('nav')
  nav.classList.toggle('ativo');
}


clickMobile.addEventListener('click', changeMenu)



