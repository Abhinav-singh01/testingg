// Selecting elements from the DOM
const modal = document.querySelector(".modal");
const outlay = document.querySelector(".outlay");
const loginContainer = document.querySelector("#loginContainer");
const fileInput = document.getElementById('fileInput');
const chatBox = document.getElementById('chatBox');
const attachButton = document.getElementById('attachButton');
const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');
const loginButton = document.getElementById('loginButton');
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const submitSignUp = document.getElementById('submitSignUp');
const submitSignIn = document.getElementById('submitSignIn');

// Function to open the chat modal
const openModal = () => {
    modal.classList.add("active");
    outlay.classList.add("overlayactive");
};

// Function to close the chat modal
const closeModal = () => {
    modal.classList.remove("active");
    outlay.classList.remove("overlayactive");
};

// Function to open the login modal
const openLogin = () => {
    loginContainer.classList.add("logactive");
};

// Function to close the login modal
const closeLogin = () => {
    loginContainer.classList.remove("logactive");
};

// Function to switch to the sign-in form
signInButton.addEventListener('click', () => {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
});

// Function to switch to the sign-up form
signUpButton.addEventListener('click', () => {
    signUpForm.style.display = "block";
    signInForm.style.display = "none";
});

// Function to handle bot responses based on user input
const getBotResponse = (userInput) => {
    // Define bot responses with lowercase keywords for better matching
    const responses = {
        "hi": "Happy to see you here! How can I assist you today? Whether you have questions about HR policies, IT support, or company events, feel free to ask!",
        "employee performance review process": "Absolutely! The employee performance review process happens annually. Employees are evaluated on key performance indicators (KPIs) related to their roles, and the review is conducted by their immediate supervisor. Feedback from colleagues and self-assessments are also considered. If you need detailed steps or documents on how the process works, I can help with that too!",
        "reset my email password": "You can reset your email password through the self-service portal. Log in with your employee ID, navigate to the Account Settings, and select Password Reset. A verification link will be sent to your registered email for confirmation. If you face issues, the IT support team is available to assist!",
        "latest hr manual": "I've received the document. Here's a summary of the HR manual:\n- *Leave Entitlements:* Updated leave policies for casual, medical, and earned leave.\n- *Performance Reviews:* The manual outlines the updated criteria and timelines for performance evaluations.\n- *Employee Benefits:* Detailed information about health insurance, retirement plans, and new wellness initiatives.\nLet me know if you'd like further details or specific sections summarized!",
        "company's event schedule": "I've processed the document. Here are the key details:\n- *Annual Conference:* Scheduled for November 15th.\n- *Team Building Workshop:* Happening on October 5th.\n- *Monthly Townhall:* Scheduled on the first Friday of every month.\nWould you like to know more about any of these events?"
    };

    // Convert user input to lowercase and trim spaces
    const lowerCaseInput = userInput.toLowerCase().trim();

    // Find a matching keyword in the responses
    for (const keyword in responses) {
        if (lowerCaseInput.includes(keyword)) {
            return responses[keyword];
        }
    }

    // Default response if no match is found
    return "I couldn't quite catch that. Could you try again?";
};


// Function to handle file upload
const handleFileUpload = () => {
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            messageInput.value = `Uploaded file: ${file.name}`; // Show file name in input area
        }
    });
};

// Event listener for file attachment button
attachButton.addEventListener('click', () => fileInput.click());

// Event listener for sending a message in chat
sendButton.addEventListener('click', () => {
    const userInput = messageInput.value;
    if (userInput.trim() !== "") {
        const newMessage = `<div class="message user"><div class="user">User:</div><div class="text">${userInput}</div></div>`;
        chatBox.insertAdjacentHTML('beforeend', newMessage);
        const botResponse = `<div class="message bot"><div class="user">Bot:</div><div class="text">${getBotResponse(userInput)}</div></div>`;
        chatBox.insertAdjacentHTML('beforeend', botResponse);
        chatBox.scrollTop = chatBox.scrollHeight;
        messageInput.value = "";
    }
});

// Handling user sign-up form submission
submitSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;

    if (firstName && lastName && email && password) {
        // Mock-up logic for form submission
        console.log('Sign-Up Successful:', { firstName, lastName, email, password });
        alert("You have successfully signed up!");
        closeLogin(); // Close the login modal after successful sign-up
    } else {
        alert("Please fill in all the required fields.");
    }
});

// Handling user sign-in form submission
submitSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Mock-up logic for form submission
        console.log('Sign-In Successful:', { email, password });
        alert("You have successfully signed in!");
        closeLogin(); // Close the login modal after successful sign-in
    } else {
        alert("Please fill in all the required fields.");
    }
});

// Initialize file upload handling
handleFileUpload();
