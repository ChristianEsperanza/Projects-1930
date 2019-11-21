
document.getElementById('eventCreation').addEventListener('submit', processForm);

function processForm(e){

  e.preventDefault();
  console.log("Submit button click!")

 
  var title = document.getElementById("inputTitle").value;
  var date = document.getElementById('inputDate').value;
  var time = document.getElementById('inputTime').value;
  var ampm = document.getElementById('inputAMPM').value;
  var muscles = document.getElementById('musclesInput').value;
  var numOfBuddies = document.getElementById('numOfBuddies').value;

  var event = db.collection("event");

  event.add({
    title: title
  });




}
