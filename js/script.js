console.log("Hello World");

welcomeSpeech();


// Call the Function to welcome Speech
function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName != ''){
        document.getElementById('user-greeting').textContent = userName; 
    }
}


function sendMessage(){
    let message = document.getElementById('user-message').value;
    if(message != ''){
        alert("Message Sent : " + message);
    } else{
        alert("Please enter a message before sending.");
    }
}