const buttonOrder = document.getElementById("order-cleaning")
const blockAdvantages = document.getElementById("advantages")
const blockOurWork = document.getElementById("our-work")
const posOurWork = blockOurWork.offsetTop / 2
const LastBlockWork = blockOurWork.offsetHeight
const scrollChangeButton = 30
const scrollChangeServices = 200
console.log(LastBlockWork)

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChangeButton) { 
    buttonOrder.classList.add('less-size')
  }
  else { buttonOrder.classList.remove('less-size') }

  if (scrollpos >= scrollChangeServices) { 
    blockAdvantages.classList.add('change-state')
  }
  else { blockAdvantages.classList.remove('change-state') }

  if(scrollpos >= posOurWork ) {
    blockOurWork.classList.add('our-work-add')
    buttonOrder.classList.add('hide')
  }
  else { 
    blockOurWork.classList.remove('our-work-add')
    buttonOrder.classList.remove('hide')
  }

  if(scrollpos >= LastBlockWork ) {
    blockOurWork.classList.remove('our-work-add')
    blockOurWork.classList.add('change-work')
  }
})

/* button open main nav */

const buttonOpen = document.getElementById("button-menu")
const mainNav = document.getElementById("main-menu")
const header = document.getElementById("header")

buttonOpen.addEventListener('click', function() {
  mainNav.classList.toggle('active');
  header.classList.toggle('background');
})