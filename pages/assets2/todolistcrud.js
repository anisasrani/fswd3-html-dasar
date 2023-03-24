const baseurl = "https://crudcrud.com/api/1457e5f83e6b46a4826d277f6c28bafd";

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteItem)
const todoList = document.getElementById("todos");
document.querySelector("form").addEventListener("submit", save);

var todoItems = [];
var selected = -1;

function printItems() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    for (var i = 0; i < todoItems.length; i++) {
        const li = document.createElement("LI");
        li.dataset.id = i;
        li.addEventListener("click", handleClick)
        li.innerText = todoItems[i].title;
        todoList.appendChild(li);
    }
}

async function save(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.querySelector("[name = title]");
    if (selected >= 0) {
        var itemId = todoItems[selected]._id;
        const response = await fetch(baseurl + '/todos' + itemId, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ "title": title.value }),
        });
        if (response.ok) {
            alert("TERSIMPAN");
            todoItems[selected].title = title.value;
            postUpdate();
        } else {
            alert("GAGAL");
        }
    }
    else {
        const response = await fetch(baseurl + '/todos', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ "title": title.value }),
        });
        if (response.ok) {
            document.querySelector("input").value = "";
            alert("TERSIMPAN");
        } else {
            alert("GAGAL");
        }
    }

}

async function list() {
    const response = await fetch(baseurl + '/todos', {
        method: 'get',
        headers: {
            'accept': 'application/json',
        },
    });
    if (response.ok) {
        const todos = await response.json();
        todoItems = todos;
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }
        for (var i = 0; i < todoItems.length; i++) {
            const li = document.createElement("LI");
            li.dataset.id = i;
            li.addEventListener("click", handleClick);
            li.innerText = todoItems[i].title;
            todoList.appendChild(li);
        }
    } else {
        alert("GAGAL");
    }
}

function handleClick(event) {
    selected = event.target.dataset.id;
    deleteButton.hidden = false;
    document.querySelector("input").value = todoItems[selected].title;
}

async function deleteItem(event) {
    var itemId = todoItems[selected]._id;
    const response = await fetch(baseurl + '/todos/' + itemId, {
        method: 'delete',
        headers: {
            'accept': 'application/json',
        },
    });
    if (response.ok) {
        todoItems.splice(selected, 1)
        postUpdate();
    } else {
        alert("GAGAL");
    }
}

function postUpdate() {
    selected = -1;
    deleteButton.hidden = true;
    printItems();
    document.querySelector("input").value = "";
}