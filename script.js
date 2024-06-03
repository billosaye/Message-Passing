// Select the input element where the user types their message
const messageInput = document.getElementById("message-input");

// Define a function that gets the message from the input box and displays it
function getMessage(){
    // Select the paragraph where the message will be displayed and set its content to the input value
    document.getElementById("message-output").innerHTML = messageInput.value;
    // Clear the input box after displaying the message
    messageInput.value = ""; 
}

// Add an event listener to the input box for when a key is pressed down
document.querySelector("#message-input").addEventListener("keydown", (event) => {
    // Check if the key pressed is the "Enter" key
    if(event.key === "Enter")
        // If "Enter" is pressed, call the getMessage function
        getMessage();
});
