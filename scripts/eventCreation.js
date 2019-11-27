// $("#button_submit").click(function(e){
//   e.preventDefault();
//   console.log("in handler: clicked!");
// });





//var values = $('#').val() -------------- for multi-selections
//JSON object before writing it on the data base and print it right away.


document.getElementById('eventCreation').addEventListener("submit", processForm);


function processForm(event){
  console.log("Yes button clicked")
  
}


function hah(e){

// function processForm(e){


//   e.preventDefault();
//   console.log("Submit button click!")

 

  var title = document.getElementById("inputTitle").value;
  var date = document.getElementById('inputDate').value;
  var time = document.getElementById('inputTime').value;
  var ampm = document.getElementById('inputAMPM').value;
  // var muscles = document.getElementById('musclesInput').value; <<<<<<Original line
  var numOfBuddies = document.getElementById('select_numOfBuddies').value;
  var message = document.getElementById('text_event').value;


  // mBiceps = getElementById("#biceps");

  // if (mBiceps.isChecked()) {
  //   db.document("gym").collection("4gk10LflK4tT8yXnekNZ").document("targetMuscles").value(true);
  // }

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

//   var title = document.getElementById("inputTitle").value;
//   var date = document.getElementById('inputDate').value;
//   var time = document.getElementById('inputTime').value;
//   var ampm = document.getElementById('inputAMPM').value;
//   var muscles = document.getElementById('musclesInput').value;
//   var numOfBuddies = document.getElementById('select_numOfBuddies').value;
//   var message = document.getElementById('text_event').value;

//   var event = db.collection("event");

//   event.add({
//     title: title,
//     date: date,
//     time: time + " " + ampm,
//     skillLevel: "ask Carly",
//     number: numOfBuddies,
//     message: message
//   });
//   console.log(["event created", title, date, time + " " + ampm, numOfBuddies + " people can join the event", "More details: \n" + message]);



  var event = db.collection("event");

  event.add({
    title: title,
    date: date,
    time: time + " " + ampm,
    skillLevel: "ask Carly",
    number: numOfBuddies,
    message: message
  });

  console.log(["event created", title, date, time + " " + ampm, numOfBuddies + " people can join the event", "More details: \n" + message]);

// }
