function getEvent(event) {
    var db = db.collection(event).get().then(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var span = document.createElement("span");
            document.getElementById("eventTitle").appendChild(span);
            var node = document.createTextNode(doc.data().title);
            span.appendChild(node);
        });
    });
}