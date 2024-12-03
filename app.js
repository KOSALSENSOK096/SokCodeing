document.addEventListener("DOMContentLoaded", () => {
    const askButton = document.getElementById("ask-btn");
    const userInputField = document.getElementById("user-input");
    const botResponseField = document.getElementById("bot-response");
    const chatLog = document.getElementById("chat-log");

    // AI Bot interaction logic
    askButton.addEventListener("click", () => {
        const userInput = userInputField.value.trim();
        if (userInput) {
            chatLog.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
            userInputField.value = "";

            // Fetch bot response based on user input
            let botResponse = generateBotResponse(userInput);

            // Display bot response in chat log and on the bot response field
            chatLog.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
            botResponseField.innerText = botResponse;
            chatLog.scrollTop = chatLog.scrollHeight;
        }
    });

    // Simulate bot responses based on user input
    function generateBotResponse(userInput) {
        const lowerCaseInput = userInput.toLowerCase();

        // Simple responses based on user input
        if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
            return "Hello! How can I assist you today?";
        }
        if (lowerCaseInput.includes("sort")) {
            return generateSortingCode();
        }
        if (lowerCaseInput.includes("reverse")) {
            return generateReverseCode();
        }
        if (lowerCaseInput.includes("fibonacci")) {
            return generateFibonacciCode();
        }
        if (lowerCaseInput.includes("loop")) {
            return generateLoopCode();
        }
        if (lowerCaseInput.includes("condition")) {
            return generateConditionCode();
        }
        if (lowerCaseInput.includes("help")) {
            return "I'm here to help! You can ask me for code examples, like sorting, Fibonacci, loops, etc.";
        }
        if (lowerCaseInput.includes("exit") || lowerCaseInput.includes("goodbye")) {
            return "Goodbye! See you next time!";
        }

        // Default response if no keyword matches
        return "I didn't quite understand that. But I can assist you with coding! Try asking for code examples.";
    }

    // Generate Python code for sorting
    function generateSortingCode() {
        return `Here is a Python code for sorting a list:\n\n
# Python code to sort a list\n
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]\n
numbers.sort()\n
print("Sorted numbers:", numbers)\n`;
    }

    // Generate Python code for reversing a string
    function generateReverseCode() {
        return `Here is a Python code for reversing a string:\n\n
# Python code to reverse a string\n
text = "Hello, world!"\n
reversed_text = text[::-1]\n
print("Reversed string:", reversed_text)\n`;
    }

    // Generate Python code for Fibonacci sequence
    function generateFibonacciCode() {
        return `Here is a Python code for generating Fibonacci sequence:\n\n
# Python code to generate Fibonacci sequence\n
def fibonacci(n):\n
    a, b = 0, 1\n
    while n > 0:\n
        yield a\n
        a, b = b, a + b\n
        n -= 1\n

n = 10  # Number of terms\n
print("Fibonacci sequence:")\n
for number in fibonacci(n):\n
    print(number)\n`;
    }

    // Generate Python code for loops
    function generateLoopCode() {
        return `Here is a Python code for a simple loop:\n\n
# Python code for a loop\n
for i in range(5):\n
    print("Loop iteration:", i)\n`;
    }

    // Generate Python code for conditions
    function generateConditionCode() {
        return `Here is a Python code for an if-else condition:\n\n
# Python code for conditions\n
x = 10\n
if x > 5:\n
    print("x is greater than 5")\n
else:\n
    print("x is 5 or less")\n`;
    }

    // Terminal code execution (simulated)
    const runCodeButton = document.getElementById("run-code-btn");
    const codeInputField = document.getElementById("code-input");
    const codeOutputField = document.getElementById("code-output");

    runCodeButton.addEventListener("click", () => {
        const code = codeInputField.value.trim();
        if (code) {
            codeOutputField.innerHTML = "Running code...\n" + code;
            setTimeout(() => {
                codeOutputField.innerHTML += "\nCode executed successfully!";
            }, 1000);
        }
    });
});
