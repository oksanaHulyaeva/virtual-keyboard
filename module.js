const codes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const lowerCaseEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  '&#8679; Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '&#9650;', '/', 'Shift &#8679;',
  'Ctrl', 'Win', 'Alt', '&emsp;', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

const upperCaseEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  '&#8679; Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650;', 'Shift &#8679;',
  'Ctrl', 'Win', 'Alt', '&emsp;', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

const lowerCaseRu = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '&#8592;',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  '&#8679; Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&#9650;', 'Shift &#8679;',
  'Ctrl', 'Win', 'Alt', '&emsp;', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

const upperCaseRu = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592;',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  '&#8679; Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift &#8679;',
  'Ctrl', 'Win', 'Alt', '&emsp;', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];

export const KEYS = {
  codes,
  lowerCaseEn,
  upperCaseEn,
  lowerCaseRu,
  upperCaseRu,
};
