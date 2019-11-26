db.collection("event").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        $('<span/>', {
            appendTo: '#eventTitle', 
            id: doc.id
        });
    });
});
