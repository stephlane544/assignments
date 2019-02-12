var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var pokemon = data.objects[0].pokemon;
        console.log(pokemon);

        for(var i = 0; i < pokemon.length; i++){
            document.getElementById("names").innerHTML += "<p> " + pokemon[i].name + ": " + pokemon[i].resource_uri + "</p>";
        }
    }
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

