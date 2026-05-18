const os = require ("os");

  var totalMemory = os.totalmem();
  var freeMemory = os.freemem();

  console.log(`Total Memory: ${totalMemory}`);
  console.log(`Free Memory: ${freeMemory}`);

  const fs = require("fs");

  // const files = fs.readdirSync("./");
  // console.log(files);

  fs.readdir("./", function(err, files) {
    if (err) console.log("Error", err);
    else console.log("Files", files);
  })

  const EventEmitter = require("events");
  const emitter = new EventEmitter();

  emitter.on("messageLogged", (arg) => {
    console.log("Message logged", arg);
  });

  emitter.emit("messageLogged", {id: 1, url: "http://"}); 

  //CRUD
  //Create
  //Read
  //Update
  //Delete

// import http from "http";
// import path from "path";
// import { fileURLToPath } from "url";
// import fs from "fs";  

// console.log(import.meta.url)

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log(req.method);

//   switch(req.url) {
//     case "/":
//       res.setHeader("Content-Type","text/html ");
//       const staticPath = path.join(__dirname, 'templates', 'index.html');
//       const html = fs.readFileSync(staticPath);
//       res.end(html);
//       break;

//     case "/about":
//       res.setHeader("Content-Type","text/html ");
//       const staticPath2 = path.join(__dirname, 'templates', 'about.html');
//       const html2 = fs.readFileSync(staticPath2);
//       res.end(html2);
//       break;

//     case "/contact":
//       res.setHeader("Content-Type","text/html ");
//       const staticPath3 = path.join(__dirname, 'templates', 'contact.html');
//       const html3 = fs.readFileSync(staticPath3);
//       res.end(html3);
//       break;
//     default:
//       res.setHeader("Content-Type","text/html ");
//       const staticPath4 = path.join(__dirname, 'templates', 'notfound.html');
//       const html4 = fs.readFileSync(staticPath4);
//       res.end(html4);
//       break;
//   } 
// }); 
// server.listen(3001, () => {
//   console.log("Server is running on port http://localhost:3001");
// }); 


// app.get("/", (req, res) => {
//   console.log(req.url);
//   console.log(req.method);
//   res.sendFile(path.join(__dirname, 'templates', 'index.html'));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, 'templates', 'about.html'));
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, 'templates', 'contact.html'));
// });