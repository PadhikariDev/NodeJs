// //importing modules

// import extra from "./extra.js";
// // //importing file handling 
// // import ap from "./files.js";

// console.log(extra.sub(2,5));


//creating http server
import http from "http";
import fs from "fs"
const httpServer =http.createServer((req , res)=>{
    const result = `${Date.now()}:Request Received : ${req.method}\n`
    fs.appendFile("log.txt",result,(err)=>{
    console.log("new log has been created");   
    res.end("hello from the server side");
    })
});

httpServer.listen(3000, ()=>{
    console.log("server has been started")
})