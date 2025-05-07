import { Table } from '@servicenow/sdk/core'

export const x_502054_sdk_test_todo = Table({
    name: 'x_502054_sdk_test_todo',
    label: 'ToDo',
    scriptable_table: false,
    allow_web_service_access: true,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: false,
    accessible_from: 'public',
    extends: 'task',
    actions: ['read'],
    schema: {},
})
