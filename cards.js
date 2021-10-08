const showBtn = document.querySelector('#showBtn');

function toggleCardState() {
  //toggle .front
  const frontCard = document.querySelector('div.front');
  frontCard.classList.toggle('hidden');
  //toggle .back
  const backCard = document.querySelector('div.back');
  backCard.classList.toggle('hidden');
}

showBtn.addEventListener('click', () => {
  toggleCardState();
});
