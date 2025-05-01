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



/* Creating RESTapi 
Get /users -list all user
Get /users/1 -list user with id 1
Post /users - creates new user
Patch /users/id - edit the user with id 1 
Delete /users/id - deltes the users with id 
Using middle ware for post methods


import express from "express";
import {readFile} from "fs/promises";

let data;
async function loadData() {
    try {
        data = JSON.parse(await readFile(new URL('./MOCK_DATA.json', import.meta.url)));
    } catch (err) {
        console.error('Error loading MOCK_DATA.json:', err);
        process.exit(1);  
    }
}

const app = express();
const port = 3000;

app.use(express.json());


loadData().then(()=>{
    
app.get('/api/users',(req,res)=>{
    res.json(data);
})

app.get('/api/users/:id',(req,res)=>{
   const id =Number(req.params.id);
   const user = data.find(user=> user.id===id);
   return res.json(user);
})

app.post('/api/users',(req,res)=>{
    const newUser = req.body;
    newUser.id=data.length +1;
    data.push(newUser);
    res.status(201).json(data);
})


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})
})
.catch(err =>{
    console.log("Failed to start the server");
})

*/

