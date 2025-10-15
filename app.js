var input = document.getElementById("todo");

function addTodo() {
    if (input.value.trim() !== "") {
        var liELement = document.createElement("li");
          liELement.style.color = "green";
           liELement.style.fontSize = "25px";

        var liText = document.createTextNode(input.value);
        var ulELement = document.getElementById("todoList");

        // delete button element

        var delBtnELEMENT = document.createElement("button");
        var delBtnText = document.createTextNode("Delete");
        // delete button element style
        delBtnELEMENT.style.color = "green";
        delBtnELEMENT.style.backgroundColor = " rgb(209, 231, 221)";
        delBtnELEMENT.style.border = "1px solid green";
        delBtnELEMENT.style.borderRadius = "5px";
        delBtnELEMENT.style.margin = "20px";

        delBtnELEMENT.appendChild(delBtnText);
        delBtnELEMENT.setAttribute("onclick", "deleteSingleItem(this)");

        // edit button element

        var editBtnELEMENT = document.createElement("button");

        var editBtnText = document.createTextNode("Edit");
        // edit button element style
        editBtnELEMENT.style.color = "green";
        editBtnELEMENT.style.backgroundColor = " rgb(209, 231, 221)";
        editBtnELEMENT.style.border = "1px solid green";
        editBtnELEMENT.style.borderRadius = "5px";
        editBtnELEMENT.appendChild(editBtnText);

        editBtnELEMENT.setAttribute("onclick", "editSingleItem(this)");

        liELement.appendChild(liText);

        liELement.appendChild(delBtnELEMENT);

        liELement.appendChild(editBtnELEMENT);

        ulELement.appendChild(liELement);

        input.value = "";
    } else {
        alert("required fields are missings");
    }
}

function deleteAll() {
    var ulElement = document.getElementById("todoList");

    ulElement.innerHTML = "";
}

function deleteSingleItem(e) {
    e.parentNode.remove();
}

function editSingleItem(e) {
    var updatedValue = prompt("ENter updated value");

    e.parentNode.firstChild.nodeValue = updatedValue;
}



