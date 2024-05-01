const fs = require('fs');
const { json } = require('stream/consumers');

fs.readFile('test.json','utf8',(err,data)=>{
    if(err){
        console.error(err)
        return;
    }

    const jsdata = JSON.parse(data)

    const newname = 'Ria'
    jsdata.age = newname

    fs.writeFile('test.json',JSON.stringify(jsdata),'utf8',(err)=>{
        if(err){
            console.error(err)
            return;
        }
        console.log("Rewrite success")
    })

});
