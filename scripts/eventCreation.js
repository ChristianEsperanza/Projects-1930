
// document.getElementById('eventCreation').addEventListener('submit', processForm); <<<<<<<<Original line
document.getElementById('eventCreation').addEventListener('click', processForm); //Changed to on click

function processForm(e){

  e.preventDefault();
  console.log("Submit button click!")

 
  var title = document.getElementById("inputTitle").value;
  var date = document.getElementById('inputDate').value;
  var time = document.getElementById('inputTime').value;
  var ampm = document.getElementById('inputAMPM').value;
  // var muscles = document.getElementById('musclesInput').value; <<<<<<Original line
  var numOfBuddies = document.getElementById('select_numOfBuddies').value;
  var message = document.getElementById('text_event').value;
  var muscles = document.getElementById('musclesInput').value; //The line i was messing with

/////////////////////////////////
  mBiceps = getElementById('input[name="biceps"]:checked').value;
  var bicepEvent = db.collection("event").collection("gym").collection("targetMuscles").document("biceps");
  
  bicepEvent.add({
    biceps: true
  });
//////////////////////////////////////
  var event = db.collection("event");

  event.add({
    title: title,
    biceps: true,
    date: date,
    time: time + " " + ampm,
    skillLevel: "ask Carly",
    number: numOfBuddies,
    message: message
  });
  console.log(["event created", title, date, time + " " + ampm, numOfBuddies + " people can join the event", "More details: \n" + message]);




}
