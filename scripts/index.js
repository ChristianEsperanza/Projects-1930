    //Directs to the user database 
db.collection('user').doc('test').onSnapshot(function (snap){
    console.log("Current data is...", snap.data());
        //Customizes user index page to display the user's name which
        //Is stored in the database
    document.getElementById("username").innerHTML = snap.data().name;
});