import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '866da5bec3d52210218df54d050131b4',
    table: 'sys_script_include',
    data: {
        access: 'package_private',
        active: true,
        api_name: 'x_502054_sdk_test.ToDoHelper',
        client_callable: false,
        mobile_callable: false,
        name: 'ToDoHelper',
        sandbox_callable: false,
        script: `var ToDoHelper = Class.create();
ToDoHelper.prototype = {
    initialize: function() {
    },
	
	getTodos: function(){
		var grToDo = new GlideRecord("x_502054_sdk_cnvd_todo_task");
		grToDo.query();

		return grToDo;
	},

    type: 'ToDoHelper'
};`,
        sys_name: 'ToDoHelper',
    },
})
