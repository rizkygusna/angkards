const form = document.querySelector('#optionsForm');

form.addEventListener('submit', (e) => {
  //get input via dom
  const rangeNumber = form.elements.range.value;
  const cardAmount = form.elements.amount.value;
  const answerType = form.elements.answer.value;
  //save data to localStorage
  localStorage.setItem('rangeNumber', rangeNumber);
  localStorage.setItem('cardAmount', cardAmount);
  localStorage.setItem('answerType', answerType);
});
