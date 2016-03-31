// Hardware parameters

address = '192.168.0.10';

setInterval(function() {

  // Update power
  json_data = send(address, '/id');

  // Update status
  if (json_data.connected == 1){
    $("#status").html("Device Online");
    $("#status").css("color","green");    
  }
  else {
    $("#status").html("Device Offline");
    $("#status").css("color","red");     
  }

}, 5000);

// Function to control the lamp
function buttonClick(clicked_id){

  if (clicked_id == "1"){
    send(address, "/on");  
  } 

  if (clicked_id == "2"){
    send(address, "/off");  
  } 

}