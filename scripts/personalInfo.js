
/**
 * Listens for user to click submit button, then it takes the specified 
 * element and updates the database.
 */
document.getElementById('submit').addEventListener("click", processForm);

        function processForm(e) {
            e.preventDefault();
                //Sends message to console when user clicks submit
            console.log("submit button clicked!")

                //Gets the values from the age, gender, and program of the user
            var dbref = db.collection("user").doc("test");
            var age = document.getElementById('age').value;
            var gender = document.getElementById('gender').value;
            var program = document.getElementById('program').value;

            /* Printing to the log */
            console.log(age + " " + gender + " " + program);

                //Writes the values from the user input into the database 
            dbref.set({
                age: age,
                gender: gender,
                program: program
            });

        }