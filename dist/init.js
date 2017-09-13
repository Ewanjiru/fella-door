var selfEasyrtcid = "";
var socket = io();

var connections=[]
 
 
function connect() {
  socket.on("message",(data)=>{
    performCall(data)
  })
  easyrtc.setVideoDims(1280,720);
  easyrtc.setRoomOccupantListener(convertListToButtons);
  easyrtc.easyApp("felladoor", "selfVideo", ["callerVideo"], loginSuccess, loginFailure);
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
    //performCall(connections[0])
    console.log(connections)
    /*if(connections.length==1){
      performCall(connections[0])
    }
    else if(connections.length>0){
      timer()
  }*/
    //var label = document.createTextNode(easyrtc.idToName(easyrtcid));
    //button.appendChild(label);
    //otherClientDiv.appendChild(button);
  }


 
 
function performCall(otherEasyrtcid) {
  easyrtc.hangupAll();
 
  var successCB = function() {};
  var failureCB = function() {};
  easyrtc.call(otherEasyrtcid, successCB, failureCB);
}
 
 
function loginSuccess(easyrtcid) {
  selfEasyrtcid = easyrtcid;
  //document.getElementById("iam").innerHTML = "My ID  " + easyrtc.cleanId(easyrtcid);
  socket.emit('register',easyrtcid)
}
 
 
function loginFailure(errorCode, message) {
  easyrtc.showError(errorCode, message);
}
