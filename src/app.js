# src/app.js içeriği
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Sample App!' });
});

app.get('/status', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

module.exports = app;

if (require.main === module) {
    app.listen(port, () => {
        console.log(Server running on port ${port});
    });
}