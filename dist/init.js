var selfEasyrtcid = "";
var socket = io();

var connections=[]
 
 
function connect() {
  socket.on("message",(data)=>{
    alert(data)
  })
  easyrtc.setVideoDims(640,480);
  easyrtc.setRoomOccupantListener(convertListToButtons);
  easyrtc.easyApp("easyrtc.audioVideoSimple", "selfVideo", ["callerVideo"], loginSuccess, loginFailure);
 }

  
function clearConnectList() {
  var otherClientDiv = document.getElementById("otherClients");
  //while (otherClientDiv.hasChildNodes()) {
    //otherClientDiv.removeChild(otherClientDiv.lastChild);
 // }
}
 
 
function convertListToButtons (roomName, data, isPrimary) {
  clearConnectList();
  console.log(data)
  var otherClientDiv = document.getElementById("otherClients");
  for(var easyrtcid in data) {
    connections.push(easyrtcid)
   /* var button = document.createElement("button");
    button.onclick = function(easyrtcid) {
      return function() {
        alert(easyrtcid)
        performCall(easyrtcid);
      };*/
    }(easyrtcid);
    console.log(connections)
    if(connections.length==1){
      performCall(connections[0])
    }
    else if(connections.length>0){
      timer()
  }
    //var label = document.createTextNode(easyrtc.idToName(easyrtcid));
    //button.appendChild(label);
    //otherClientDiv.appendChild(button);
  }

function randomChat(){
  return connections[Math.floor(Math.random()*connections.length)];
}

function timer(){
  sec=60
      setInterval(function(){
       sec--;
       if (sec==0){
          var connect = randomChat
          performCall(connect)
       }
      },500);
}
 
 
function performCall(otherEasyrtcid) {
  easyrtc.hangupAll();
 
  var successCB = function() {};
  var failureCB = function() {};
  easyrtc.call(otherEasyrtcid, successCB, failureCB);
  sec = 60
  setInterval(function(){
       sec--;
       if (sec==0){
          var connect = randomChat()
          console.log("switching to"+ connect)
          performCall(connect)
       }
    },500);
}
 
 
function loginSuccess(easyrtcid) {
  selfEasyrtcid = easyrtcid;
  //document.getElementById("iam").innerHTML = "My ID  " + easyrtc.cleanId(easyrtcid);
  socket.emit('register',easyrtcid)
}
 
 
function loginFailure(errorCode, message) {
  easyrtc.showError(errorCode, message);
}
