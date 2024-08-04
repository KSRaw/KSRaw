// script.js
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '\'': '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '@': '.--.-', ' ': '/'
  };
  
  const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const arabicAlphabet = 'ابتثجحخدذرفقكلمنهوي';
  const englishWords = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const arabicWords = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];
  
  function morseToText(morse) {
    const morseArray = morse.trim().split(' ');
    const text = morseArray.map(code => {
      for (const [letter, codeInMorse] of Object.entries(morseCode)) {
        if (code === codeInMorse) {
          return letter;
        }
      }
      return '';
    }).join('');
    return text;
  }
  
  function translateToArabic(text) {
    return text.split('').map(char => {
      const index = englishWords.indexOf(char.toUpperCase());
      return index !== -1 ? arabicWords[index] : char;
    }).join('');
  }
  
  function translateToFrench(text) {
    // Just a placeholder for actual French translation
    return text;
  }
  
  document.getElementById('translateButton').addEventListener('click', () => {
    const morseInput = document.getElementById('morseInput').value;
    const text = morseToText(morseInput);
    document.getElementById('arabicTranslation').textContent = 'ترجمة إلى العربية: ' + translateToArabic(text);
    document.getElementById('englishTranslation').textContent = 'Translation in English: ' + text;
    document.getElementById('frenchTranslation').textContent = 'Traduction en français: ' + translateToFrench(text);
  });
  