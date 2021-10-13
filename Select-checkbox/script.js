
const multiSelect = document.querySelector('.multiselect');
const checkboxes = document.querySelector('#checkboxes');

function showCheckboxes(){
  checkboxes.classList.toggle('activeOptions');
}
multiSelect.addEventListener('click', showCheckboxes);