const form = document.querySelector('#optionsForm');
form.addEventListener('submit', (e) => {
  // e.preventDefault();
  const rangeNumber = form.elements.range.value;
  const cardAmount = form.elements.amount.value;
  const answerType = form.elements.answer.value;
});

function toggleCardState() {
  //toggle .front
  const frontCard = document.querySelector('div.front');
  frontCard.classList.toggle('hidden');
  //toggle .back
  const backCard = document.querySelector('div.back');
  backCard.classList.toggle('hidden');
}
