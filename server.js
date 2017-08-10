

require('babel-register');

const express = require('express');
const path = require('path');
const request = require('request');

// const swig = require('swig');
// const React = require('react');
// const Router = require('react-router');
// const ReactDOM = require('react-dom/server');
// const routes = require('./src/routes');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', express.static(`${__dirname}/public`));


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
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


// app.use(function(req, res) {
//   Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
//     if (err) {
//       res.status(500).send(err.message)
//     } else if (redirectLocation) {
//       res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
//     } else if (renderProps) {
//       var html = ReactDOM.renderToString(React.createElement(Router.RouterContext, renderProps));
//       var page = swig.renderFile('./index.html', { html: html });
//       res.status(200).send(html);
//     } else {
//       res.status(404).send('Page Not Found')
//     }
//   });
// });

const server = require('http').createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
