const discordApp = require ('../../../src/index.js');
const app = require('express')();

app.get('/api/rynyk', (req, res) => {
    discordApp();
    res.send('Rynyk time!!');
});

module.exports = app;

