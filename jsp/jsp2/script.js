const textForm = document.getElementById("textForm");
    const textInput = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");
    const outputDiv = document.getElementById("output");

    submitButton.addEventListener("click", function() {
        const enteredText = textInput.value;
        outputDiv.textContent = "Entered Text: " + enteredText;
    });