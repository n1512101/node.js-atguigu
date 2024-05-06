let tds = document.querySelectorAll('td')
tds.forEach(item => {
  item.onclick = () => {
    item.style.background = '#222'
  }
})