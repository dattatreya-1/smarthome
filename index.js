const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.get('/api/health', (req, res) => res.json({status: 'ok', time: new Date().toISOString()}));
app.get('/', (req, res) => res.send('SmartHome server running successfully.'));
app.listen(port, () => console.log(`Server running on port ${port}`));
