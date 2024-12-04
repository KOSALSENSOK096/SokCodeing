// AI chatbot interaction
const botLink = document.getElementById('bot-link');
const botTerminal = document.getElementById('bot-terminal');

botLink.addEventListener('click', function(e) {
    e.preventDefault();
    botTerminal.classList.toggle('active');
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
        const botResponse = `I'm a chatbot and I received: "${userInput}"`;
        displayMessage(botResponse, 'bot');
    }, 1000);
}

function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.innerText = message;

    const messagesDiv = document.getElementById('messages');
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Custom cursor movement
document.addEventListener('mousemove', function(e) {
    var cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
