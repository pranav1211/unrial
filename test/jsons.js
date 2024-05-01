var getname = document.querySelector('#getname');
var setname = document.querySelector('#setname');
var thename = document.querySelector('#name');
var thedata;

function getdata() {
    fetch('test.json')
        .then(response => response.json())
        .then(data => { thedata = data })
        .catch(error => console.error('Error reading JSON:', error));
}

function senddata(thedata){
    thename.innerHTML = thedata["age"];
}
setname.addEventListener('click',() =>{
    var newname = prompt("Enter new name")
    thedata.age = newname
})

getname.addEventListener('click',() =>{
    senddata(thedata)
})

getdata();
