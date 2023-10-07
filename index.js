const fs = require('fs');


//Blocking, Synchronous 

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

const textOut = `This is all we know about Avacados. ${textIn} \n Created On: ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);

console.log('File written!!');


//Non-Blocking, Asynchronous

const text = fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log("Will read file!");

fs.readFile('./txt/startttt.txt', 'utf-8', (err, data) => {
    if(err){
        return console.log("ERROR 💥😈");
    }
});

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log("Successfully written in file 😁");
//             })
//         });
//     })
// });
