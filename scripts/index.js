// if the current user logged in user
// is authenticated, then grab "uid" "displayName" and "email"
// use "set()" with merge (if document did not exist it will be created)
firebase.auth().onAuthStateChanged(function(user){
    console.log(user.email); 
    console.log(user.displayName); 
    username = user.uid;
    db.collection("user").doc(user.uid).set({
        email:user.email,
        name:user.displayName

    }),{ merge: true }

    db.collection('user').doc(user.uid).onSnapshot(function (snap){
        console.log(snap.data());
        
            //Customizes user index page to display the user's name which
            //Is stored in the database
        document.getElementById("username").innerHTML = snap.data().name;
    });
    
});

    //Directs to the user database 
    