const loveme = document.querySelector('.loveme')
const like = document.getElementById('times')

let isClickIntervalInterrupted = true
let clickCounter = 0
let numberOfLikes = 0
loveme.addEventListener('click', (e) => {
  isClickIntervalInterrupted = false
  clickCounter++
  //after 500ms click interval will be interrupted
  setTimeout(() => {
    clickCounter = 0
    isClickIntervalInterrupted = true
  }, 500)

  /*
  if click intervall is not interrupted and number of clicks is 2 
  then the heart will be created and displayed on the image
  */
  if (!isClickIntervalInterrupted && clickCounter === 2) {
    //increasing number of likes 
    like.innerHTML = ++numberOfLikes
    createHeart(e)
  }
})

function createHeart(e) {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  //getting X,Y coordinates relative to image
  let innerImgY = e.clientY - loveme.offsetTop
  let innerImgX = e.clientX - loveme.offsetLeft
  heart.style.top = `${innerImgY}px`
  heart.style.left = `${innerImgX}px`
  loveme.appendChild(heart)


  setTimeout(() => heart.remove(), 600)
}
