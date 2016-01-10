angular.module('todoApp', [])
    .controller('TodoListController', function() {
    var todoList = this;
    var index = null,
        emptyName = false,
        emptyDescription = false,
        edit = false,
        del = false;
    todoList.todos = [
        {name:'Language', description:"Write a post", done:false},
        {name:'Learning', description:"Read", done:false}];

    //Adiciona na lista
    todoList.addTodo = function() {
        
        if( todoList.validateFields() ) {
            todoList.todos.push({
                name:todoList.todoName, 
                description:todoList.todoDescription, 
                done:false
            });
            todoList.hideModal();
        } 
    };

    todoList.validateFields = function() {

        if ( todoList.todoName == "" ){
            todoList.emptyName = true;
        }  else {
            todoList.emptyName = false;
        }
        if ( todoList.todoDescription == "" ) {
            todoList.emptyDescription = true;
        } 
        else {
            todoList.emptyDescription = false;
        }

        if (todoList.emptyName || todoList.emptyDescription) {
            return false;
        } else{
            return true;
        };
    }

    //Edita da lista
    todoList.editTodo = function() {
        
        if( todoList.validateFields() ) {
            todoList.todos.splice(index, 1,
            {
                name:todoList.todoName, 
                description:todoList.todoDescription, 
                done:false
            });
            todoList.hideModal();
        }
    };

    //Deleta da lista
    todoList.delete = function(){
        todoList.todos.splice(index, 1);
        
    };

    todoList.setEdit = function(todo){
        todoList.todoName = todo.name, 
        todoList.todoDescription = todo.description;
        index = todoList.todos.indexOf(todo);
        todoList.edit = true;
    };

    todoList.setDelete = function(todo){
        index = todoList.todos.indexOf(todo);
        todoList.del = true;
    };

    todoList.isDeleteTodo = function () {
        return todoList.del;
    };

    todoList.isEditTodo = function () {
        return todoList.edit;
    };

    todoList.clear = function () {
        todoList.todoName = ''; 
        todoList.todoDescription = ''; 
        todoList.edit = false;
        todoList.del = false;
        todoList.index = null;
        this.emptyName = false;
        this.emptyDescription = false;
    }

    todoList.hideModal = function () {
        $('#formModal').modal('hide');
    }

    $('#formModal').on('hidden.bs.modal', function (e) {
        todoList.clear();
    })
});

