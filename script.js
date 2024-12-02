// Select DOM Elements
const userNameInput = document.getElementById('userName');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

// Event Listener for Greet Button
greetButton.addEventListener('click', () => {
  // Get the user's input
  const userName = userNameInput.value.trim();

  // Validate input
  if (userName === "") {
    greetingMessage.style.color = "red";
    greetingMessage.textContent = "Please enter your name before proceeding!";
    greetingMessage.style.opacity = 1;
    greetingMessage.style.transform = "translateY(0)";
  } else {
    // Display the personalized greeting
    greetingMessage.style.color = "green";
    greetingMessage.textContent = `Hello, ${userName}! Welcome to JavaScript Basics.`;
    greetingMessage.style.opacity = 1;
    greetingMessage.style.transform = "translateY(0)";
    // Clear input field after greeting
    userNameInput.value = "";

    // Reset styles after 3 seconds
    setTimeout(() => {
      greetingMessage.style.opacity = 0;
      greetingMessage.style.transform = "translateY(-20px)";
    }, 3000);
  }
});
