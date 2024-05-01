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
    fetch('/updateData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newurl: newName }) // Send the new URL in the request body
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Log the response message from the server
        // You can update the UI or show a message to the user here if needed
    })
    .catch(error => console.error('Error updating data:', error));
}