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
        script: Now.include('../../includes/sys_script_include/ToDoHelper.server.js'),
        sys_name: 'ToDoHelper',
    },
})
