import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "package_json": {
                            "table": "sys_module",
                            "id": "2b0d303310944678a32a00a533bfebdd"
                        }
                    };
            }
        }
    }
}
