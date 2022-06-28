

function validation() {
    //Assign the input data to the respective variables
    var newpsw = document.getElementById("newpsw").value;
    var repsw = document.getElementById("repsw").value;
    var newpsw2 = document.getElementById("newpsw");
    var repsw2 = document.getElementById("repsw");
    var checkpsw = document.getElementById("checkpsw");

    //Check the passwords
    if (newpsw == '') {
        checkpsw.innerHTML = "Please Enter password.";
        newpsw2.classList.add("checkpsw-input");
        repsw2.classList.add("checkpsw-input");
    } else if (repsw == '') {
        checkpsw.innerHTML = "Please Re-Enter password.";
        repsw2.classList.add("checkpsw-input");
    } else if (newpsw != repsw) {
        checkpsw.innerHTML = "Passwords do not match.";
        repsw2.classList.add("checkpsw-input");
    } else if (newpsw.length <= 8) {
        checkpsw.innerHTML = "Password length is less than 8 characters.";
        newpsw2.classList.add("checkpsw-input");
        repsw2.classList.add("checkpsw-input");
    } else if (newpsw.search(/\d/) == -1) {
        checkpsw.innerHTML = "Password contains only characters from alphabets. Please include a number and one special character";
        newpsw2.classList.add("checkpsw-input");
        repsw2.classList.add("checkpsw-input");
    } else {
        document.querySelector(".main-content-first").classList.add("hidden");
        document.querySelector(".main-content-second").classList.remove("hidden");
    }
}