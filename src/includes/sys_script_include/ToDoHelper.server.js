var ToDoHelper = Class.create();
ToDoHelper.prototype = {
    initialize: function() {
    },
	
	getTodos: function(){
		var grToDo = new GlideRecord("x_502054_sdk_cnvd_todo_task");
		grToDo.query();

		return grToDo;
	},

    updateToDo: function(sysId, field, value){
        var grToDo = new GlideRecord("x_502054_sdk_cnvd_todo_task");
        if (grToDo.get(sysId)) {
            grToDo.setValue(field, value);
            grToDo.update();
        }
        return grToDo;
    },

	insertToDo: function(){
        var grToDo = new GlideRecord("x_502054_sdk_cnvd_todo_task");
		var sysId = grToDo.insert();

		return sysId;
	},

    type: 'ToDoHelper'
};