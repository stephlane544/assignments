
    var url = "https://api.vschool.io/steph/todo";
    axios.get(url).then(function(response){
        var objects = response.data;

        objects.forEach(function(object){
            var todo = document.createElement("div");
            todo.id = "todo";
            var todoTitle = document.createElement("input");
            todoTitle.id = "todoTitle";
            todoTitle.value = object.title;


            var todoDescription = document.createElement("textarea");
            todoDescription.rows = "2";
            todoDescription.className = "todoDescription";
            todoDescription.value = object.description;
            // var textArea = document.createElement("textArea");
            


            var imgContainer = document.createElement("div");
            imgContainer.id = "imgContainer";
            var check = document.createElement("span");
            var mark = document.createTextNode("✓");
            check.appendChild(mark);
            check.className = "checkMark";
            check.addEventListener("click", handleChecked);

            var deleteButton = document.createElement("img");
            deleteButton.id = "deleteTodo";
            deleteButton.src = "icon_delete.png";
            deleteButton.style.width = "50px";
            deleteButton.style.height = "50px";
            deleteButton.addEventListener("click", deleteObject);

            var saveButton = document.createElement("img");
            saveButton.src = "Asset 5.png";
            saveButton.id = "saveTodo";
            saveButton.style.width = "50px";
            saveButton.style.height = "50px";
            saveButton.addEventListener("click", saveObject);

            var itemId = object._id;
            var todoDiv = document.createElement("div");
            todoDiv.className = "todoDiv";
            todoDiv.id = itemId;
            document.getElementById("getTodos").appendChild(todoDiv);

            

            addStrikeThrough(todoTitle, object.completed, check);

            document.getElementById(itemId).appendChild(todoTitle);
            document.getElementById(itemId).appendChild(imgContainer);
            imgContainer.appendChild(check);
            imgContainer.appendChild(deleteButton);
            imgContainer.appendChild(saveButton);
            document.getElementById(itemId).appendChild(todoDescription);


            if(object.imgUrl.length > 0){
                var todoImg = document.createElement("div");
                todoImg.className = "todoImg";
                var img1 = document.createElement("img");
                img1.id = "imgStyle";
                img1.src = object.imgUrl;
                todoImg.appendChild(img1);
                document.getElementById(itemId).appendChild(todoImg);
    
                }
        });
    }).catch(function(error){
        console.log(error);
    });


function handleChecked(e){
    e.target.parentNode.parentNode.childNodes[0].classList.toggle("striken");
    var url = "https://api.vschool.io/steph/todo/" + e.target.parentNode.parentNode.id;
    console.log(e.target.parentNode.parentNode.childNodes[0]);
    var newObject = {
        "completed": e.target.parentNode.parentNode.childNodes[0].classList == "striken"
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
    var url = "https://api.vschool.io/steph/todo";
    var newTodo = {
        "title": document.getElementById("title").value,
        "description": document.getElementById("description").value,
        "imgUrl": document.getElementById("image").value,
        "price": document.getElementById("price").value,
        "complete": document.getElementById("complete").value
    };
    axios.post(url, newTodo).then(function(response){
    console.log(response.data);
    alert("You have added this todo!");
    location.reload();
  }).catch(function(error){
    console.log(error);
  });

});


function deleteObject(e){
    e.preventDefault();
    var url = "https://api.vschool.io/steph/todo/" + e.target.parentNode.parentNode.id;
    axios.delete(url).then(function(response){
    console.log(response.data);
    alert("The to-do item you selected has been deleted!");
      location.reload();
  }).catch(function(error){
    console.log(error);
  });
};



document.getElementById("openButton").addEventListener("click", openForm);
let openCounter = 0;
function openForm() {
    openCounter++;
    if(openCounter % 2 == 1){
    document.getElementsByClassName("postTodo")[0].classList = "visible";
    }else{
        document.getElementsByClassName("visible")[0].classList = "postTodo";
    }
}


function saveObject(e){
    e.preventDefault();
    var url = "https://api.vschool.io/steph/todo/" + e.target.parentNode.parentNode.id;
    let editedObject = {
        "title": e.target.parentNode.parentNode.childNodes[0].value,
        "description": e.target.parentNode.parentNode.childNodes[2].value,
        "complete": e.target.parentNode.parentNode.childNodes[0].classList == "striken"
    };
    axios.put(url, editedObject).then(function(response){
        console.log(response.data);
        location.reload();
    }).catch(function(error){
        console.log(error);
    });
}