//JQuery: true
function getTodos() {
    try {
        var todos = JSON.parse(localStorage.getItem('todos'));
        if (todos === null) {
            return [];
        }
    } catch (e) {
        todos = [];
        saveTodos(todos);
    }
    return todos;
}

function saveTodos(todos) {
    var todoObject = {};
    for (todo in todos) {
        todoObject[todo] = buildTodoItem(todos[todo]);
    }
    localStorage.setItem('todos', JSON.stringify(todoObject));
}

function saveSingleTodo(todo) {
    var todos = getTodos();
    todos[todo] = buildTodoItem(todo);
    saveTodos(todos);
}

function renderTodos() {
    var todos = getTodos();
    var todoList = $('#todos')
    for (todo in todos) {
        todoList.append(todos[todo]);
    }
}

function buildTodoItem(text) {
    var item = '<li>' + text + '<button class="delete material-symbols-outlined">delete</button><button class="mark material-symbols-outlined">mark</button></li>';
    $('.delete').click(function() {
        $(this).parent().remove();
        deleteTodo($(this).parent().text());
    });
    $('.mark').click(function() {
        $(this).parent().toggleClass('marked');
        markTodo($(this).parent().text());
    });
    return item;
}

function deleteTodo(text) {
    var todos = getTodos();
    for (todo in todos) {
        if (todo === text) {
            delete todos[todo];
        }
    }
    saveTodos(todos);
    renderTodos();
}

function markTodo(text) {
    var todos = getTodos();
    for (todo in todos) {
        if (todo === text) {
            todos[todo].classList.toggle('marked');
        }
    }
    saveTodos(todos);
    renderTodos();
}