const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Dummy data
const lokaleLebensmittel = [
  { id: 1, name: 'Bio-Bauernmarkt', type: 'Markt', location: 'Beispielstadt', rating: 4.5 },
  { id: 2, name: 'Öko-Laden', type: 'Laden', location: 'Beispielstadt', rating: 4.8 }
];

app.get('/api/lokale', (req, res) => {
  res.json(lokaleLebensmittel);
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});