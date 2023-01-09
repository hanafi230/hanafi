import http from 'http';

const connect = http.createServer((req, res)=> {
    res.end("Hi, selamat malam");
});

connect.listen(3000);

console.log("server sedang berjalan");