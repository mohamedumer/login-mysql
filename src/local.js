const file= require("fs");
var object={a:10}
var da=JSON.stringify(obj);
file.writeFile("./localdata.json",da,(err)=>{if(err){console.log("error")}else{console.log("successfully written")}})