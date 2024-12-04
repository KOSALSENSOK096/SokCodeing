// AI chatbot interaction
const botLink = document.getElementById('bot-link');
const botTerminal = document.getElementById('bot-terminal');

// Toggle chatbot visibility
botLink.addEventListener('click', function (e) {
    e.preventDefault();
    botTerminal.classList.toggle('active');
});

// Send the user message and get a response
async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Do nothing if input is empty

    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = ''; // Clear input field

    // Send user input to the AI bot API
    const response = await getBotResponse(userInput);
    displayMessage(response, 'bot');
}

// Function to get the bot response from the API
async function getBotResponse(userInput) {
    try {
        const response = await fetch('/api/get-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput }),
        });

        const data = await response.json();
        return data.message; // Return the AI's response
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return "Sorry, I'm having trouble understanding your request.";
    }
}

// Display message in the chat window
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.innerText = message;

    const messagesDiv = document.getElementById('messages');
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to latest message
}

// Custom cursor movement
document.addEventListener('mousemove', function (e) {
    var cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
