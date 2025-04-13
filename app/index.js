const express = require('express');
const app = express();
app.use(express.json());

let playlists = [];

app.get('/playlists', (req, res) => {
  res.json(playlists);
});

app.post('/playlists', (req, res) => {
  const { name } = req.body;
  playlists.push(name);
  res.status(201).json({ message: 'Playlist added' });
});

module.exports = app;
