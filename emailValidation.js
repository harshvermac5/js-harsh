// Program to validate the email address
function validateEmail(email) {

    // Regex pattern for email
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email is valid
    let result = re.test(email);

    if (result) {
        console.log("The email is valid.");
    } else {
        console.log("The email is not valid.");
    }
}

// Input Email Id
let email = "       "
validateEmail(email);

email = "harshvermac5@gmail.com"
validateEmail(email);
