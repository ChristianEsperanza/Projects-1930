var todayDate = new Date();
var month = todayDate.getMonth() + 1;     // getMonth() starts at 0
var day = todayDate.getDate();
var year = todayDate.getFullYear();
if(month < 10)
    month = '0' + month.toString();
if(day < 10)
    day = '0' + day.toString();

var minDate = year + '-' + month + '-' + day;


/**In progress **/
/**Should end up only showing future events **/
db.collection("event").orderBy("timestamp", "asc");
db.collection("event").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

    });
});