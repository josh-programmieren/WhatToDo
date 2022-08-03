function getTodos() {
    try {
        var todos = JSON.parse(localStorage.getItem('todos'));
        if (todos === null) {
            alert('No todos found');
            todos = [];
            saveTodos(todos);
        } else if (todos.length === 0) {
            alert('No todos found');
        } else if (todos == "" || todos == null) {
            alert('No todos found');
        }
    } catch (e) {
        todos = [];
        saveTodos(todos);
    }
    return todos;
}

function saveTodos(todos) {
    localStorage.setItem('todos', todos);
}

function saveSingleTodo(todo) {
    var todos = getTodos();
    todos.push(todo);
    saveTodos(todos);
}

function renderTodos() {
    var todos = getTodos();
    var todoList = document.getElementById('todos');
    todoList.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        var item = buildTodoItem(todo);
        todoList.appendChild(item);
    }
}

function buildTodoItem(text) {
    let item = document.createElement('li');
    let mark = document.createElement('input');
    mark.type = 'checkbox';
    mark.checked = false;
    mark.valueChanged = function() {
        if (mark.checked) {
            markTodo(text);
        } else {
            // nothing
            item.appendChild(mark);
            item.appendChild(document.createTextNode(text));
            let del = document.createElement('button');
            del.innerHTML = 'delete';
            del.onclick = function() {
                item.remove();
                deleteTodo(text);
            }
            item.appendChild(del);
            return item;
        }

        function deleteTodo(text) {
            var todos = getTodos();
            for (var i = 0; i < todos.length; i++) {
                if (todos[i] === text) {
                    todos.splice(i, 1);
                    saveTodos(todos);
                    renderTodos();
                    break;
                }
            }
        }

        function markTodo(text) {
            var todos = getTodos();
            for (var i = 0; i < todos.length; i++) {
                if (todos[i] === text) {
                    todos.splice(i, 1);
                    saveTodos(todos);
                    renderTodos();
                    break;
                }
            }
        }
    }
}