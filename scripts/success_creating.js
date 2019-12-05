
//use queries to grab timeID
var queryString = decodeURIComponent(window.location.search);
var queries = queryString.split("?");
var timeID = queries[1];

//look for a document where docID key matches to timeID
var justCreatedEvent = db.collection("event").where("docID", "==", timeID);

//console.log justCreatedEvent elements to test  
function getEventByTimestamp() {
  justCreatedEvent.get().then(function (snap) {

    console.log(snap);
    snap.forEach(function (doc) {
      console.log(doc.data());
    })
  })

}

//display just created info on the success page.
function displayLatestEventInfo() {

  justCreatedEvent.get().then(function (snap) {
    snap.forEach(function (doc) {
      var title = doc.data().title;
      var userName = doc.data().user;
      var dateAndTime = doc.data().date + " at " + doc.data().time;
      var skillLevel = doc.data().skillLevel;
      var numOfPeople = doc.data().joined + "/" + doc.data().maxNumber;

      console.log("title:", title);
      console.log("date:", dateAndTime);
      console.log("skill level", skillLevel);
      console.log("how many people?", numOfPeople);

      $('#username').append(userName);
      $('#eventTitle').append('<div>' + title + '</div>');
      $('#dateAndTime').append('<div>' + dateAndTime + '</div>');
      $('#skillLevel').append('<div>' + skillLevel + '</div>');
      $('#numOfPeople').append(numOfPeople);
    });
  });
}


getEventByTimestamp();
displayLatestEventInfo();

