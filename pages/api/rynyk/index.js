const discordApp = require ('../../../src/app.js');
const app = require('express')();

app.get('/api/rynyk', (req, res) => {
    discordApp();
    res.send('Rynyk time!!');
});

module.exports = app;

