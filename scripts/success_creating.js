var db = firebase.database();

db.collection("event").onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        if (change.type == "added") {
            console.log("New Event: ", change.doc.data());
        }
    })
});
// function getEvent(event) {
//     var db = db.collection(event).get().then(function(querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             var span = document.createElement("span");
//             document.getElementById("eventTitle").appendChild(span);
//             var node = document.createTextNode(doc.data().title);
//             span.appendChild(node);
//         });
//     });
// }