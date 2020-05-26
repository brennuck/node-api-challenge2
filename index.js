const server = require('./server.js');

const port = 1234;
server.listen(port, () => {
    console.log(`\n= = = Server running on ${port} = = =\n`)
})