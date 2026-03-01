// Reverse String - simple, clear, no external libraries.
(function () {
  "use strict";

  const textInput = document.getElementById("textInput");
  const reverseBtn = document.getElementById("reverseBtn");
  const output = document.getElementById("output");

  /**
   * Reverses a string character by character.
   * Handles empty strings, spaces, and special characters.
   * Note: uses Array.from to better support characters like emojis (surrogate pairs).
   */
  function reverseString(value) {
    // Ensure we always work with a string
    const text = String(value ?? "");

    // Convert to an array of user-perceived characters (better than split("") for emojis)
    const chars = Array.from(text);

    // Reverse manually (character by character)
    let reversed = "";
    for (let i = chars.length - 1; i >= 0; i--) {
      reversed += chars[i];
    }
    return reversed;
  }

  function showResult(resultText) {
    // Keep the UI always visible; show a friendly placeholder for empty input
    output.textContent = resultText.length > 0 ? resultText : "(empty)";
  }

  function handleReverse() {
    const inputValue = textInput.value; // may be empty, contain spaces, etc.
    const reversed = reverseString(inputValue);
    showResult(reversed);
  }

  // Click event (no page reload)
  reverseBtn.addEventListener("click", handleReverse);

  // Allow Enter key to reverse too
  textInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleReverse();
    }
  });

  // Initial visible state
  showResult("");
})();