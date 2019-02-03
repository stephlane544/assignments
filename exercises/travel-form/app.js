document.travelForm.addEventListener("submit", message);

function message(e){
    e.preventDefault();
    var arr = [];
    var diet1 = document.travelForm.diet;
    for (var i = 0; i < diet1.length; i++){
        if(diet1[i].checked == true){
            arr.push(diet1[i].value);
        }
    }
    window.alert("First name: " + document.getElementById("name1").value + "\n" + "Last name: " + document.getElementById("name2").value + "\n" + "Age: " + document.getElementById("age1").value + "\n" + "Gender: " + document.getElementById("radio").value + "\n" + "Location: " + document.getElementById("selector").value + "\n" + "Dietary Restrictions: " + arr);
}