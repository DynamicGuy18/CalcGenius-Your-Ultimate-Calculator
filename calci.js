let screen = document.getElementById('screen');
let expression = '';

function appendToScreen(value) {
  if (screen.textContent === '0' || screen.textContent === 'Error') {
    screen.textContent = value;
  } else {
    screen.textContent += value;
  }
  expression += value;
}

function clearScreen() {
  screen.textContent = '0';
  expression = '';
}

function deleteLast() {
  let currentScreen = screen.textContent;
  if (currentScreen !== '0' && currentScreen !== 'Error') {
    screen.textContent = currentScreen.slice(0, -1);
    expression = expression.slice(0, -1);
  }
}

function calculate() {
  try {
    screen.textContent = eval(expression);
  } catch (error) {
    screen.textContent = 'Error';
  }
  expression = '';
}
