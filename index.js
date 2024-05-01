var locations;
fetch('index.json')
    .then(response => response.json())
    .then(data => { thedata = data })
    .catch(error => console.error('Error reading JSON:', error));

function geturl(data){
    locations = data['sitelocation']
}

window.location = locations;