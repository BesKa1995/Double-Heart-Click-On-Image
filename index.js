const loveme = document.querySelector('.loveme')
const like = document.getElementById('times')

let isClickIntervalInterrupted = true
let clickCounter = 0
let numberOfLikes = 0
loveme.addEventListener('click', (e) => {
  isClickIntervalInterrupted = false
  clickCounter++

  setTimeout(() => {
    clickCounter = 0
    isClickIntervalInterrupted = true
  }, 500)

  if (!isClickIntervalInterrupted && clickCounter === 2) {
    like.innerHTML = ++numberOfLikes
    createHeart(e)
  }
})

function createHeart(e) {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  let innerImgY = e.clientY - loveme.offsetTop
  let innerImgX = e.clientX - loveme.offsetLeft
  heart.style.top = `${innerImgY}px`
  heart.style.left = `${innerImgX}px`
  loveme.appendChild(heart)
  setTimeout(() => heart.remove(), 600)
}
