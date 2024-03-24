const fs = require("fs");
 fs.writeFile("message.txt","jibu jibu mithai",(err)=>{
    if (err) throw err;
    console.log("The file has been saved!");
 });

 //writeFile(1st e message thakbe,2nd e ki message di chai sheta,3rd error hole ki conditon sheta)