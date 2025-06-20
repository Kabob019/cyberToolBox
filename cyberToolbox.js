// cyberToolbox.js
const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
const hashSymbols = [...alphabet, ..."!@#$%^&*()_-+={}[]|\\:'\"<>,.?/~0123456789"];

// Event listeners
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("encryptBtn").addEventListener("click", encrypt);
  document.getElementById("hashBtn").addEventListener("click", hash);
  document.getElementById("bruteBtn").addEventListener("click", bruteForce);
});

function encrypt() {
  const sentence = document.getElementById("sentence").value.toLowerCase();
  const shift = parseInt(document.getElementById("shift").value);
  let result = "";

  for (let char of sentence) {
    let index = alphabet.indexOf(char);
    if (index === -1) {
      result += char;
    } else {
      let newIndex = (index + shift) % 26;
      if (newIndex < 0) newIndex += 26;
      result += alphabet[newIndex];
    }
  }

  document.getElementById("encryptResult").innerText = "Encrypted: " + result;
}

function hash() {
  const input = document.getElementById("hashInput").value;
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result += hashSymbols[Math.floor(Math.random() * hashSymbols.length)];
  }

  document.getElementById("hashResult").innerText = "Hashed: " + result;
}

function bruteForce() {
  const input = document.getElementById("bruteInput").value.toLowerCase();

  for (let i = 1; i < 26; i++) {
    let attempt = "";
    for (let char of input) {
      let index = alphabet.indexOf(char);
      if (index === -1) {
        attempt += char;
      } else {
        let newIndex = (index + i) % 26;
        attempt += alphabet[newIndex];
      }
    }

    const words = attempt.split(" ");
    const isValid = words.every(word => wordList.includes(word));
    if (isValid) {
      document.getElementById("bruteResult").innerText =
        `Brute Force Decrypted: ${attempt}\nKey: ${26 - i}`;
      return;
    }
  }

  document.getElementById("bruteResult").innerText = "No valid decryption found.";
}
