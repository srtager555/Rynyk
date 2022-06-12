import discordApp from "../../../src/index.js";

export default function app(req, res) {
    discordApp();

   res.status(200).json({ name: 'uwu?' })
}
