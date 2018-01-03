'use strict';

const express = require('express');
const request = require('request');
const router = express.Router();

const API_KEY = 'DBDBBEE2A6357964A7A3A4D563C273A8';
// const MY_STEAM_ID = '76561198267012829';
// another test steamID 76561198174597537
const STEAM_URL = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=';

// const friendAPI = http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=DBDBBEE2A6357964A7A3A4D563C273A8&steamid=76561198267012829&relationship=friend
// const whereIcanFoundIcons ='http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=DBDBBEE2A6357964A7A3A4D563C273A8&appid=730';

router.get('/api/getSchema', (req, res) => {
  const url = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${API_KEY}&appid=730`;
  request(url, (error, response, body) => {
    if (error) {
      res.status(404).send({ error });
    }
    if (response.statusCode !== 200) {
      res.status(response.statusCode);
    }

    body = JSON.parse(body);
    res.send(body.game.availableGameStats);
  });
});

router.get('/api/states', (req, res) => {
  const { steamId } = req.query;
  const url = `${STEAM_URL + API_KEY}&steamid=${steamId}`;
  request(url, (error, response, body) => {
    if (error) {
      res.status(404).send({ error });
    }
    if (response.statusCode !== 200) {
      res.status(response.statusCode);
    }

    body = JSON.parse(body);
    res.send(body.playerstats);
  });
});

router.get('/api/userInfo', (req, res) => {
  const { steamId } = req.query;
  const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId}`;
  request(url, (error, response, body) => {
    if (error) {
      res.status(404).send({ error });
    }
    if (response.statusCode !== 200) {
      res.status(response.statusCode);
    }
    body = JSON.parse(body);
    const { players } = body.response;
    if (players.length === 0) {
      res.status(404).send({error: 'No Player Found'});
    } else {
      res.send(players[0]);
    }
  });
});

module.exports = router;
