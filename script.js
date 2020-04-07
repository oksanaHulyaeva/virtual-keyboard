const dataObject = {
  lowerCaseEn: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '&#9650;', '/', 'Shift',
    'Ctrl', 'Win', 'Alt', '&emsp;', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
  upperCaseEn: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '&#9650;', '/', 'Shift',
    'Ctrl', 'Win', 'Alt', '&emsp;', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
  lowerCaseRu: ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '&#8592;',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&#9650;', 'Shift',
    'Ctrl', 'Win', 'Alt', '&emsp;', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
  upperCaseRu: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift',
    'Ctrl', 'Win', 'Alt', '&emsp;', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
  codes: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8',
    'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY',
    'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS',
    'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft',
    'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'ArrowUp', 'Slash',
    'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft',
    'ArrowDown', 'ArrowRight', 'ControlRight'],
};

const isEnglish = localStorage.getItem('isEng') || 'true';
let isCapslock = false;

if (localStorage.getItem('isEng') === null) {
  localStorage.setItem('isEng', isEnglish);
}

const drawKeys = (arr, elem) => {
  for (let i = 0; i < arr.length; i += 1) {
    const newKey = document.createElement('div');
    newKey.id = dataObject.codes[i];

    switch (arr[i]) {
      case ('&#8592;'): newKey.classList.add('backspace');
        break;
      case ('CapsLock'): newKey.classList.add('caps');
        break;
      case ('Shift'):
        newKey.classList.add('shift');
        break;
      case ('Tab'):
        newKey.classList.add('tab');
        break;
      case ('Enter'):
        newKey.classList.add('enter');
        break;
      case ('Ctrl'):
        newKey.classList.add('ctrl');
        break;
      case ('&emsp;'):
        newKey.classList.add('space');
        break;
      default:
        newKey.classList.add('key-style');
    }

    newKey.innerHTML = arr[i];
    elem.append(newKey);
    // newKey.append(span);
  }

  capslockHandler(elem);
  shiftHandler(elem);
  keyStyleHandler(elem);
};


const drawKeyboard = () => {
  const container = document.createElement('div');
  const keyboard = document.createElement('section');
  const textarea = document.createElement('textarea');
  textarea.rows = 5;
  textarea.cols = 80;

  document.body.append(container);
  container.classList.add('main-styles');
  container.append(textarea, keyboard);
  keyboard.classList.add('keyboard-styles');

  if (localStorage.getItem('isEng') === 'true') {
    drawKeys(dataObject.lowerCaseEn, keyboard);
    textarea.focus();
    printOnClick(keyboard, textarea);
    // console.log(localStorage.getItem('isEng'));
  }

  if (localStorage.getItem('isEng') === 'false') {
    drawKeys(dataObject.lowerCaseRu, keyboard);
    textarea.focus();
    printOnClick(keyboard, textarea);
    // console.log(localStorage.getItem('isEng'));
  }
};

const printOnClick = (keyboard, textfield) => {
  keyboard.addEventListener('click', (event) => {
    if (event.target.className === 'keyboard-styles') return;

    const letter = event.target.innerText;

    switch (event.target.innerText) {
      case ('←'):
      case ('Del'):
        textfield.value = textfield.value.slice(0, -1);
        break;
      case ('Enter'): textfield.value += '\n';
        break;
      case ('Tab'): textfield.value += '\t';
        break;
      case ('CapsLock'):
      case ('Ctrl'):
      case ('Alt'):
      case ('Win'):
      case ('Shift'): break;
      default:
        textfield.value += letter;
    }
  });
};


const capslockHandler = (elem) => {
  const caps = elem.querySelector('.caps');

  caps.addEventListener('click', () => {
    if (!isCapslock) {
      elem.innerHTML = '';
      drawKeys(dataObject.upperCaseEn, elem);
      elem.querySelector('.caps').classList.add('active');
      isCapslock = true;
    } else {
      elem.innerHTML = '';
      drawKeys(dataObject.lowerCaseEn, elem);
      isCapslock = false;
    }
  });
};

const shiftHandler = (elem) => {
  const shift = document.querySelectorAll('.shift');

  shift.forEach((item) => {
    item.addEventListener('mousedown', () => {
      elem.innerHTML = '';
      if (!isCapslock) drawKeys(dataObject.upperCaseEn, elem);
      else drawKeys(dataObject.lowerCaseEn, elem);
      elem.querySelectorAll('.shift')[0].classList.add('active');
      elem.querySelectorAll('.shift')[1].classList.add('active');
    });
    item.addEventListener('mouseup', () => {
      elem.innerHTML = '';
      if (!isCapslock) drawKeys(dataObject.lowerCaseEn, elem);
      else drawKeys(dataObject.upperCaseEn, elem);
    });
  });
};

const keyStyleHandler = (elem) => {
  elem.addEventListener('mousedown', (event) => {
    const { target } = event;
    if (target.tagName === 'SPAN' || target.tagName === 'SECTION' || target.innerText === 'Shift' || target.innerText === 'CapsLock') return;
    target.classList.add('active');
  });
  elem.addEventListener('mouseup', (event) => {
    if (event.target.className === 'keyboard-styles' || event.target.innerText === 'Shift' || event.target.innerText === 'CapsLock') return;
    event.target.classList.remove('active');
  });
};

const printOnKeypress = () => {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      // event.preventDefault();
      if (isCapslock) {
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.lowerCaseEn, document.querySelector('.keyboard-styles'));
        document.getElementById(event.code).classList.add('active');
        isCapslock = false;
      } else {
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.upperCaseEn, document.querySelector('.keyboard-styles'));
        document.querySelectorAll('DIV').forEach((item) => {
          item.classList.remove('active');
        });
        isCapslock = true;
      }
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      // console.log(event.code);
      event.preventDefault();
      if (document.querySelector('.caps').classList.contains('active')) {
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.lowerCaseEn, document.querySelector('.keyboard-styles'));
      } else {
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.upperCaseEn, document.querySelector('.keyboard-styles'));
      }
    }

    document.querySelectorAll('.key-style').forEach((item) => {
      item.classList.remove('active');
    });
    document.getElementById(event.code).classList.add('active');
    document.querySelector('TEXTAREA').focus();
  });

  document.addEventListener('keyup', (event) => {
    document.querySelectorAll('DIV').forEach((item) => {
      item.classList.remove('active');
      if (item.classList.contains('caps') && isCapslock) item.classList.add('active');
    });

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (document.querySelector('.caps').classList.contains('active')) {
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.upperCaseEn, document.querySelector('.keyboard-styles'));
        document.querySelector('.caps').classList.add('active');
      } else {
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.lowerCaseEn, document.querySelector('.keyboard-styles'));
      }
    }
    document.querySelector('TEXTAREA').focus();
  });
};

const switchLanguage = () => {
  document.addEventListener('keydown', (event) => {
    // event.preventDefault();
    // console.log('meow');
    if (event.ctrlKey && event.altKey) {
      if (localStorage.getItem('isEng') === 'true' && document.querySelector('.caps').classList.contains('active')) {
        localStorage.setItem('isEng', 'false');
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.upperCaseRu, document.querySelector('.keyboard-styles'));
      } else if (localStorage.getItem('isEng') === 'false' && document.querySelector('.caps').classList.contains('active')) {
        localStorage.setItem('isEng', 'true');
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.upperCaseEn, document.querySelector('.keyboard-styles'));
      } else if (localStorage.getItem('isEng') === 'true' && !document.querySelector('.caps').classList.contains('active')) {
        localStorage.setItem('isEng', 'false');
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.lowerCaseRu, document.querySelector('.keyboard-styles'));
      } else if (localStorage.getItem('isEng') === 'false' && !document.querySelector('.caps').classList.contains('active')) {
        localStorage.setItem('isEng', 'true');
        document.querySelector('.keyboard-styles').innerHTML = '';
        drawKeys(dataObject.lowerCaseEn, document.querySelector('.keyboard-styles'));
      } else {
        localStorage.setItem('isEng', 'true');
      }
    }
  });
};

window.onload = function () {
  drawKeyboard();
  printOnKeypress();
  switchLanguage();
};
