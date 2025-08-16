// 


        document.addEventListener('DOMContentLoaded', () => {
            welcomeSpeech();
        });

        function showModal(message) {
            document.getElementById('modal-text').textContent = message;
            document.getElementById('modal-message').style.display = 'block';
        }

        function welcomeSpeech() {
            let userName = prompt("What is your name?");
            if (userName) { // Memeriksa jika pengguna memasukkan nama (bukan null atau string kosong)
                document.getElementById('user-greeting').textContent = userName; 
            }
        }

        function displayMessage() {
            const form = document.getElementById('message-form');
            const resultContainer = document.getElementById('result-container');
            
            const name = form.elements['name'].value;
            const date = form.elements['date'].value;
            const gender = form.elements['gender'].value;
            const message = form.elements['message'].value;

            if (!name || !date || !gender || !message) {
                showModal("Please fill out all fields.");
                return;
            }

            const resultHtml = `
                <div class="bg-white p-4 rounded-lg shadow-inner">
                    <p><span class="font-bold">Name:</span> ${name}</p>
                    <p><span class="font-bold">Date:</span> ${date}</p>
                    <p><span class="font-bold">Gender:</span> ${gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
                    <p><span class="font-bold">Message:</span> ${message}</p>
                </div>
            `;

            resultContainer.innerHTML = resultHtml;
            form.reset();
            showModal("Message Sent!");
        }
    