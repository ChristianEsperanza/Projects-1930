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


firebase.auth().onAuthStateChanged(function(user){
    db.collection('user').doc(user.uid).onSnapshot(function (snap){
        console.log(snap.data());
        
            //Customizes user index page to display the user's name which
            //Is stored in the database
        document.getElementById("username").innerHTML = snap.data().name;
    });
    
});