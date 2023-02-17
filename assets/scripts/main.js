function setTheme(){
  const root = document.documentElement
  root.classList.toggle('dark')
}

document.querySelector('.main__btn').addEventListener('click',setTheme)