const getname = document.querySelector('#getname');
const setname = document.querySelector('#setname');
const thename = document.querySelector('#name');

function getdata() {
  fetch('/get-location') // Replace with actual route for fetching data
    .then(response => response.json())
    .then(data => {
      thename.innerHTML = data.sitelocation;
    })
    .catch(error => console.error('Error fetching data:', error));
}

getname.addEventListener('click', () => {
  getdata();
});

function updateData(newName) {
  fetch('/update-location', { // Replace with actual route for updating data
    method: 'POST', // Use POST for sending data
    body: JSON.stringify({ newLocation: newName }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.text()) // Handle response (optional)
    .catch(error => console.error('Error updating data:', error));
}

setname.addEventListener('click', () => {
  var newname = prompt("Enter new name");
  if (newname) {
    updateData(newname);
  }
});
