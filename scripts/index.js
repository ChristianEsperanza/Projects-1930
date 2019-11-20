// User document > Test collection

db.collection('user').doc('test').onSnapshot(function (snap){
    console.log("Current data is...", snap.data());
    document.getElementById("username").innerHTML = snap.data().name;
});