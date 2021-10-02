const form = document.querySelector('#optionsForm');
const showBtn = document.querySelector('#showBtn');

// get form input to variables
// form.addEventListener('submit', (e) => {
//   // e.preventDefault();
//   const rangeNumber = form.elements.range.value;
//   const cardAmount = form.elements.amount.value;
//   const answerType = form.elements.answer.value;
//   console.log({rangeNumber, cardAmount, answerType})
//   // e.stopPropagation(); //stop event bubbling
// });

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
