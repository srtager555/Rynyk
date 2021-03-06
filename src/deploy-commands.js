const dotenv = require("dotenv").config();
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const CLIENT_ID = process.env.CLIENT_ID;

const commands = [
   new SlashCommandBuilder()
      .setName("worktime")
      .setDescription("Time to work!!!"),
   new SlashCommandBuilder().setName("reaction").setDescription("I see you."),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(TOKEN);

rest
   .put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
   })
   .then(() => console.log("Successfully registered application commands."))
   .catch(console.error);
