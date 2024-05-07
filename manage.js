var getname = document.querySelector('#getname');
var setname = document.querySelector('#setname');
var thename = document.querySelector('#name');
var thedata;

function getdata() {
    fetch('index.json')
        .then(response => response.json())
        .then(data => { 
            thedata = data;
            senddata(thedata);
        })
        .catch(error => console.error('Error reading JSON:', error));
}

getname.addEventListener('click', () => {
    getdata();
});

function senddata(data) {
    thename.innerHTML = data["sitelocation"];
}

setname.addEventListener('click', () => {
    var newname = prompt("Enter new name");
    updateData(newname)
});

function updateData(newName) {
    try {
        const serverUrl = 'https://64.227.143.61:3000/your-endpoint'    

        // Important: Handle potential cross-origin issues (CORS) if applicable
        const response = await fetch(serverUrl, {
            // Add CORS headers if necessary (refer to server-side setup)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Assuming the response is JSON
        responseDiv.textContent = JSON.stringify(data, null, 2); // Pretty-print JSON response
    } catch (error) {
        responseDiv.textContent = `Error: ${error.message}`;
    }
}