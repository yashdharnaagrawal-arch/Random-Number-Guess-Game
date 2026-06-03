let guessInput = document.getElementById("guess-input");
let resultMsg = document.getElementById("result-msg");

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log("Random Number:", randomNumber);

let attempts = 0;
let maxAttempts = 5;

//basic version without attempt limit and feedback on remaining attempts
// function checkGuess() {
//     // let userGuess = parseInt(guessInput.value);
//     let userGuess = Number(guessInput.value);
    
//     console.log("User Guess:", userGuess);

//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
//         resultMsg.textContent = "Please enter a valid number between 1 and 20.";
//         resultMsg.style.color = "red";
//         return;
//     }

//     if (userGuess === randomNumber) {
//         resultMsg.textContent = "Congratulations! You guessed the number!";
//         resultMsg.style.color = "green";
//     } else if (userGuess < randomNumber) {
//         resultMsg.textContent = "Too low! Try again.";
//         resultMsg.style.color = "orange";
//     } else {
//         resultMsg.textContent = "Too high! Try again.";
//         resultMsg.style.color = "red";
//     }
// }

//enhanced version with attempt limit and feedback on remaining attempts
function checkGuess() {

    let userGuess = Number(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        resultMsg.textContent = "Enter number between 1 and 20";
        resultMsg.style.color = "red";
        return;
    }

    attempts++;

    let remaining = maxAttempts - attempts;

    if (userGuess === randomNumber) {
        resultMsg.textContent =
        `🎉 Correct! You guessed in ${attempts} attempts`;
        resultMsg.style.color = "green";

        submitBtn.disabled = true;
    }

    else if (attempts >= maxAttempts) {
        resultMsg.textContent =
        `❌ Game Over! Number was ${randomNumber}`;
        resultMsg.style.color = "red";

        submitBtn.disabled = true;
    }

    else if (userGuess < randomNumber) {
        resultMsg.textContent =
        `📉 Too Low! Attempts left: ${remaining}`;
        resultMsg.style.color = "orange";
    }

    else {
        resultMsg.textContent =
        `📈 Too High! Attempts left: ${remaining}`;
        resultMsg.style.color = "orange";
    }
}


//When an event happens, the browser creates an event object and sends it to your function.
/**
 * The event object contains information about the event, such as which key was pressed, the target element, and more.
 * You can name the parameter of the function anything you like, but it's common to use "event" or "e" to represent the event object.
 * function(event)
    function(e)
    function(myEvent)
    | Property       | Meaning                             |
| -------------- | ----------------------------------- |
| `event.key`    | Which keyboard key was pressed      |
| `event.target` | Which element triggered the event   |
| `event.type`   | Type of event (`click`, `keypress`) |

When you press a key, the browser creates an object like this internally:

{
   key: "Enter",
   type: "keypress",
   target: inputElement
}

 */
// guessInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         checkGuess();
//     }
// });

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", checkGuess);

/**
 * Because in JavaScript, the event object is optional.

    When an event happens, the browser automatically creates an event object and passes it to the callback function.

    You only include event if you need information about the event.

    You do not need any details about the click.

    You only want to run code when clicked.

    So no parameter is needed.
 */
let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log("New Random Number:", randomNumber);
    attempts = 0;
    /*
    An <input> is a self-closing/form element.
    It does not contain inner text between opening and closing tags.

    So the browser stores its data in the .value property.
------------------------------------------------------------------------
    <p>Hello</p>

    has text inside the tag, so the browser stores it as text nodes accessible through:
    */
    guessInput.value = "";
    resultMsg.textContent = "";
    submitBtn.disabled = false;

    console.log("New Random Number:", randomNumber);
});

