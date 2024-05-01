getdata()
var locations;

function getdata() {
    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            geturl(data); 
        })
        .catch(error => console.error('Error reading JSON:', error));
}

function geturl(data) {
    locations = data['sitelocation'];        
    window.location = locations
    
}


