const express = require('express')
const app = express()
const port = 3030

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
});

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/api/players', (req, res) => {

    const data = {
        "name": "Elias Pettersson",
        "position": "Forward",
        "number": "40"
    };

  res.setHeader('Content-Type', 'application/json');
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
