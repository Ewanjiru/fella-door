// Load required modules
const http = require('http'); // http server core module
const express = require('express'); // web framework external module
const serveStatic = require('serve-static'); // serve static files
const socketIo = require('socket.io'); // web socket external module
const easyrtc = require('./lib/easyrtc_server'); // EasyRTC external module

// Set process name
process.title = 'node-easyrtc';

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
const app = express();
app.use(serveStatic(`${__dirname}/dist`, { index: ['index.html'] }));
app.get('/', (req, res) => {
  res.senFile(`${__dirname}/dist/index.html`);
});

// Start Express http server on port 8080
const webServer = http.createServer(app).listen(process.env.PORT || 8080);

// Start Socket.io so it attaches itself to Express server
const socketServer = socketIo.listen(webServer, { 'log level': 1 });

socketServer.on('register', (data) => {
  console.log(data);
});


//easyrtc.setOption('logLevel', 'debug');
// Overriding the default easyrtcAuth listener, only so we can directly access its callback
easyrtc.events.on('easyrtcAuth', (socket, easyrtcid, msg, socketCallback, callback) => {
  easyrtc.events.defaultListeners.easyrtcAuth(socket, easyrtcid, msg, socketCallback, (err, connectionObj) => {
    if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
      callback(err, connectionObj);
      return;
    }

console.log(easyrtcid)
    connectionObj.setField('credential', msg.msgData.credential, { isShared: false });


    //console.log(`[${easyrtcid}] Credential!`, connectionObj.getFieldValueSync('credential'));
    callback(err, connectionObj);
  });
});

// To test, lets print the credential to the console for every room join!
easyrtc.events.on('roomJoin', (connectionObj, roomName, roomParameter, callback) => {
  //console.log(`[${connectionObj.getEasyrtcid()}] Credential retrieved!`, connectionObj.getFieldValueSync('credential'));
  easyrtc.events.defaultListeners.roomJoin(connectionObj, roomName, roomParameter, callback);

//connectionObj.generateRoomClientList('default',()=>{

  // });
});

// Start EasyRTC server
const rtc = easyrtc.listen(app, socketServer, null, (err, rtcRef) => {
  //console.log('Initiated');

  rtcRef.events.on('roomCreate', (appObj, creatorConnectionObj, roomName, roomOptions, callback) => {
    //console.log(`roomCreate fired! Trying to create: ${roomName}`);

    appObj.events.defaultListeners.roomCreate(appObj, creatorConnectionObj, roomName, roomOptions, callback);
  });
});

// listen on port 8080
webServer.listen(8080, () => {
  //console.log('listening on http://localhost:8080');
});
