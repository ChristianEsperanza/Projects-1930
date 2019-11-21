
document.getElementById('eventCreation').addEventListener('submit', processForm);

function processForm(e){

  e.preventDefault();
  console.log("Submit button click!")

 
  var title = document.getElementById("inputTitle").value;
  var date = document.getElementById('inputDate').value;
  var time = document.getElementById('inputTime').value;
  var ampm = document.getElementById('inputAMPM').value;
  // var muscles = document.getElementById('musclesInput').value;
  var numOfBuddies = document.getElementById('select_numOfBuddies').value;
  var message = document.getElementById('text_event').value;
  var muscles = document.getElementById('musclesInput').value;

  mBiceps = getElementById("#biceps");

  if (mBiceps.isChecked()) {
    db.document("gym").collection("4gk10LflK4tT8yXnekNZ").document("targetMuscles").value(true);
  }

  // var event = db.collection("event");

  // event.add({
  //   title: title,
  //   date: date,
  //   time: time + " " + ampm,
  //   skillLevel: "ask Carly",
  //   number: numOfBuddies,
  //   message: message
  // });
  console.log(["event created", title, date, time + " " + ampm, numOfBuddies + " people can join the event", "More details: \n" + message]);




}
