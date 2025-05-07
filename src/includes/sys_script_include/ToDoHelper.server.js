var ToDoHelper = Class.create();
ToDoHelper.prototype = {
    initialize: function() {
    },
	
	getTodos: function(){
		var grToDo = new GlideRecord("x_502054_sdk_cnvd_todo_task");
		grToDo.query();

		return grToDo;
	},

    type: 'ToDoHelper'
};