var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form.elements[0];
    var lastName = form.elements[1];
    var age = form.elements[2];
    var gender = form.elements[3];
    var location = form.elements[4];
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName.value + "\nLast Name: " + lastName.value + "\nAge: " + age.value + "\nGender: " + gender.value + "\nTravel Location: " + location.value + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);