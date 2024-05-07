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
    window.location = 'http://64.227.143.61:6123/qrep?data1='+ newName
}