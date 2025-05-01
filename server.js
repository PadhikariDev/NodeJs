// //importing modules

// import extra from "./extra.js";
// // //importing file handling 
// // import ap from "./files.js";

// console.log(extra.sub(2,5));


// 2) => creating http server
// import http from "http";
// import fs from "fs"
// import url from "url";

// const httpServer =http.createServer((req , res)=>{
//     const result = `${Date.now()}:Request Received : ${req.method}\n`
//     const myUrl = url.parse(req.url,true)
//     fs.appendFile("log.txt",result,(err,data)=>{
//         switch(myUrl.pathname){
//             case "/":
//                 res.end('Homepage');
//                 break;
//             case "/about":
//                 console.log(myUrl);
//                 res.end(`Hi ${myUrl.query.myName}`);
//                 break;
//             default:
//                 res.end('404 server error');
//                 break;
//         }
//     })
// });

// //3)=> listening to the port for the server
// httpServer.listen(3000, ()=>{
//     console.log("server has been started")
// })

/* 3) starting with the express  

import http from "http";
import express from "express";

const app =express();

app.get('/',(req,res)=>{
    return res.send("Hello this is Home Page");
});

app.get('/about',(req,res)=>{
    return res.send("Hello this is Home Page");
});

app.listen(3000,()=>{
    console.log('Server started');
})
*/



