document.askName.addEventListener("submit", function(e){
    e.preventDefault();
    var url = "https://api.vschool.io/" + document.getElementById("name").value + "/todo";
    axios.get(url).then(function(response){
        var objects = response.data;
        document.getElementById("getTodos").innerHTML = "<div class='todos'>Your to-dos: </div>";

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

            var check = document.createElement("div");
            check.className = "checkMark";
            todoTitle.appendChild(check);
            check.addEventListener("click", handleChecked);

            var deleteButton = document.createElement("img");
            deleteButton.id = "deleteTodo";
            deleteButton.src = "icon_delete.png";
            deleteButton.style.width = "50px";
            deleteButton.style.height = "50px";
            deleteButton.addEventListener("click", deleteObject);

            var itemId = object._id;
            var todoDiv = document.createElement("div");
            todoDiv.className = "todoDiv";
            todoDiv.id = itemId;
            document.getElementById("getTodos").appendChild(todoDiv);
            

            addStrikeThrough(todoTitle, object.completed, check);

            document.getElementById(itemId).appendChild(document.createElement("br"));
            document.getElementById(itemId).appendChild(document.createElement("br"));
            document.getElementById(itemId).appendChild(todoTitle);
            document.getElementById(itemId).appendChild(todoDescription);
            document.getElementById(itemId).appendChild(todoImg);
            document.getElementById(itemId).appendChild(deleteButton);
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
        check.className.toggle = "true";
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

function addStrikeThrough(todoTitle, isCompleted, check){
    if(isCompleted){
        todoTitle.classList.toggle("striken");
        check.className.toggle = "true";
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

