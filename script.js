document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = ''; // Clear input field
        
        // Simulate AI response
        setTimeout(() => {
            addMessage('This is an AI response based on your query: ' + userInput, 'ai');
        }, 1000);
    }
});

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    document.querySelector('.messages').appendChild(messageDiv);
    scrollMessagesToBottom();
}

function scrollMessagesToBottom() {
    const messages = document.querySelector('.messages');
    messages.scrollTop = messages.scrollHeight;
}
