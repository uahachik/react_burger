const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder // set that index.html inside client/build to be a static file
//   // so we need set build folder as a folder
//   server.use(express.static('client/build'));

//   // serve index.html
//   server.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
