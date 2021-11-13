const Discord = require("discord.js");
const client = new Discord.Client()
const ms = require ("ms")
const cmd = require("node-cmd"); 
const moment = require("moment");
const request = require('request');
const canvas = require("canvas"); 
const probot = require("probot-tax");
const random=require("random");
const express = require('express');
const fs = require('fs');
const ytdl = require("ytdl-core");
const convert = require("hh-mm-ss")
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const pretty = require("pretty-ms");
const db = require('quick.db');
const prefix = "prefix"
client.login("token");

const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Bot'));
app.listen()
client.on("ready", () => {
console.log(`Bot Name : ${client.user.username}`)
client.user.setStatus("dnd")
client.user.setActivity(`${prefix}help`, {type: "PLAYING"})
})
