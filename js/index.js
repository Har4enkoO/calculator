const display = document.querySelector('.display');
let memory;

document
  .querySelectorAll('.digits button')
  .forEach((button) => button.addEventListener('click', digitPressed));
function digitPressed(ev) {
  const digit = ev.target.innerText;
  if (memory && display.value === toString(memory)) {
    memory = '';
    display.value = '';
  }
  if (display.value === '0' && digit === '0') {
    display.value = '0';
  } else if (
    (display.value.slice(-2) === '/0' ||
      display.value.slice(-2) === '+0' ||
      display.value.slice(-2) === '-0' ||
      display.value.slice(-2) === '*0') &&
    digit != '.'
  ) {
    display.value = display.value;
  } else {
    display.value += digit;
  }
}

document
  .querySelectorAll('.operations button')
  .forEach((button) => button.addEventListener('click', operationsPressed));
function operationsPressed(ev) {
  const operations = ev.target.innerText;
  if (!display.value) {
    display.value = '';
  } else if (
    display.value.slice(-1) === '+' ||
    display.value.slice(-1) === '-' ||
    display.value.slice(-1) === '*' ||
    display.value.slice(-1) === '/' ||
    display.value.slice(-1) === '.'
  ) {
    display.value = display.value.slice(0, -1) + operations;
  } else {
    display.value += operations;
  }
}
document.querySelector('.eq').addEventListener('click', eqPressed);
function eqPressed() {
  if (
    display.value.includes('/0+') ||
    display.value.includes('/0-') ||
    display.value.includes('/0*') ||
    display.value.includes('/0/') ||
    display.value.slice(-2) === '/0'
  ) {
    alert('На нуль ділити не можна!!! Виправте, будь ласка, помилку');
  } else {
    memory = eval(display.value);
    display.value = memory;
  }
}

document.querySelector('.clean-all').addEventListener('click', cleanAllPressed);
function cleanAllPressed() {
  display.value = '';
}

document.querySelector('.clean-one').addEventListener('click', cleanOnePressed);
function cleanOnePressed() {
  display.value = display.value.slice(0, -1);
}
