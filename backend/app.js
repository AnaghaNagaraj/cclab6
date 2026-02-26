const http = require('http');

const server = http.createServer((req, res) => {
    res.end("CC LAB 6 SUCCESS 🚀");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
