AOS.init()

function noScroll() {
  window.scrollTo(0, 0)
}

function toggleNav(x) {
  x.classList.toggle('change')

  document.getElementById('mySidenav').style.width = x.classList.contains(
    'change'
  )
    ? '100%'
    : '0'

  x.classList.contains('change')
    ? window.addEventListener('scroll', noScroll)
    : window.removeEventListener('scroll', noScroll)
}
