const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

// moving these routes to the client side (in routes.js) so that we have a SPA!

// app.get('/about', (req, res) => {
//   res.sendFile('about.html', { root: './public' });
// });

// app.get('/contact', (req, res) => {
//   res.sendFile('contact.html', { root: './public' });
// });

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));