import discordApp from '../../../src/index.js';

export default function rynyk(req, res) {
    res.statusCode = 200;
    discordApp(); // Run the discordApp function
}