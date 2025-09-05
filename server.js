const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Dummy data
const lokaleLebensmitteln = [
  { id: 1, name: 'Bio-Bauernmarkt', type: 'Markt', location: 'Musterstadt', rating: 4.5 },
  { id: 2, name: 'ÖkoLaden', type: 'Laden', location: 'Musterstadt', rating: 4.8 }
];

app.get('/api/lokale', (req, res) => {
  res.json(lokaleLebensmitteln);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});