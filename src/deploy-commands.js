const dotenv = require("dotenv").config();
const { REST, Routes } = require("discord.js");

const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const CLIENT_ID = process.env.CLIENT_ID;

const commands = [
  {
    name: "worktime",
    description: "Time to work!!!",
  },
  {
    name: "reaction",
    description: "I see you.",
  },
  {
    name: "start-antispam",
    description: "I will create a channels list for work on the spam",
  },
  {
    name: "ping",
    description: "get my response time",
  },
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("I starting to refresh the slash commands");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log("I updated the slash commands");
  } catch (error) {
    console.log(error);
  }
})();
