
const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/', express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// another test steamID 76561198174597537
const API_KEY = 'DBDBBEE2A6357964A7A3A4D563C273A8';
const MY_STEAM_ID = '76561198267012829';
const STEAM_URL = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=';

// const friendAPI = http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=DBDBBEE2A6357964A7A3A4D563C273A8&steamid=76561198267012829&relationship=friend
// const whereIcanFoundIcons ='http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=DBDBBEE2A6357964A7A3A4D563C273A8&appid=730';

app.get('/api/getSchema', (req, res) => {
  const url = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${API_KEY}&appid=730`;
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    if (response.statusCode !== 200) {
      console.log('Invalid Status Code Returned:', response.statusCode);
    }

    body = JSON.parse(body);
    res.send(body.game.availableGameStats);
  });
});

app.get('/api/states', (req, res) => {
  const userSteamID = req.query.name;
  const url = `${STEAM_URL + API_KEY}&steamid=${userSteamID}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    }

    if (response.statusCode !== 200) {
      console.log('Invalid Status Code Returned:', response.statusCode);
    }

    body = JSON.parse(body);
    res.send(body.playerstats);
  });
});

app.get('/api/userInfo', (req, res) => {
  const userSteamID = req.query.name;
  const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${userSteamID}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    }
    if (response.statusCode !== 200) {
      console.log('Invalid Status Code Returned:', response.statusCode);
    }

    body = JSON.parse(body);
    res.send(body.response.players[0]);
  });
});

const server = require('http').createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
