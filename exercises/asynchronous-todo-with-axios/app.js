document.askName.addEventListener("submit", function(e){
    e.preventDefault();
    var url = "https://api.vschool.io/" + document.getElementById("name").value + "/todo";
    axios.get(url).then(function(response){
        var objects = response.data;

        objects.forEach(function(object){
            var todoTitle = document.createElement("div");
            var title = document.createTextNode("Title: ");
            var text = document.createTextNode(object.title);
            todoTitle.appendChild(title);
            todoTitle.appendChild(text);

            var todoDescription = document.createElement("div");
            todoDescription.className = "todoDescription";
            var description = document.createTextNode("Description: ");
            var text2 = document.createTextNode(object.description);
            todoDescription.appendChild(description);
            todoDescription.appendChild(text2);

            var todoImg = document.createElement("div");
            todoImg.className = "todoImg";
            var img1 = document.createElement("img");
            img1.src = object.imgUrl;
            todoImg.appendChild(img1);

            var input = document.createElement("input");
            input.className = "input";
            input.type = "checkbox";

            var button = document.createElement("button");
            button.id = "delete";
            var buttonText = document.createTextNode("Delete");
            button.appendChild(buttonText);
            button.addEventListener("click", deleteObject);

            var itemId = object._id;
            var todoDiv = document.createElement("div");
            todoDiv.id = itemId;
            document.getElementById("getTodos").appendChild(todoDiv);
            input.addEventListener("click", handleChecked);



            todoTitle.appendChild(input);

            addStrikeThrough(todoTitle, object.completed, input);

            document.getElementById(itemId).appendChild(document.createElement("br"));
            document.getElementById(itemId).appendChild(document.createElement("br"));
            document.getElementById(itemId).appendChild(todoTitle);
            document.getElementById(itemId).appendChild(todoDescription);
            document.getElementById(itemId).appendChild(todoImg);
            document.getElementById(itemId).appendChild(button);
        });
    }).catch(function(error){
        console.log(error);
    });
    console.log(idArr);
    return url;
});

function handleChecked(e){
    e.target.parentNode.classList.toggle("striken");
    var url = "https://api.vschool.io/" + document.getElementById("name").value + "/todo/" + e.target.parentNode.parentNode.id;
    if(e.target.parentNode.classList == "striken"){
        var newObject = {
            "completed": true
        }
    }else{ 
        var newObject = {
            "completed": false
        }
    }
    axios.put(url, newObject).then(function(response){
        console.log(response.data);
    }).catch(function(error){
        console.log(error);
    });
}

function addStrikeThrough(todoTitle, isCompleted, input){
    if(isCompleted){
        todoTitle.classList.toggle("striken");
        input.checked = true
    }
};



document.postTodo.addEventListener("submit", function(e){
    e.preventDefault();
    var url = "https://api.vschool.io/" + document.getElementById("name2").value + "/todo";
    var newTodo = {
        "title": document.getElementById("title").value,
        "description": document.getElementById("description").value,
        "imgUrl": document.getElementById("image").value,
        "price": document.getElementById("price").value,
        "complete": document.getElementById("complete").value
    };
    axios.post(url, newTodo).then(function(response){
    console.log(response.data);
  }).catch(function(error){
    console.log(error);
  });
});


function deleteObject(e){
    e.preventDefault();
    var url = "https://api.vschool.io/" + document.getElementById("name").value + "/todo/" + e.target.parentNode.id;
    axios.delete(url).then(function(response){
    console.log(response.data);
  }).catch(function(error){
    console.log(error);
  });
};

