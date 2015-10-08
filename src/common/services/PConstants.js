angular.module('project.pconstants', [])
    .constant('P_ConstantsService', {
        //Session_Expired_Status_Code
        SESSION_EXPIRED_STATUS_CODE: 901,
        STATUS_CODE_OK: 200,
        //Cookie
        COOKIE_SESSIONID: 'sessionId',
        COOKIE_STATE: 'state',
        //Generic Ones
        UNDERSCORE: '_',
        SUCCESS: 'success',
        WARNING: 'warning',
        IN_PROGRESS: 'in_progress',
        ERROR: 'error',
        DISABLED: 'disabled',
        TRUE: 'true',
        FALSE: 'false',
        ADD: 'add',
        EDIT: 'edit',
        SAVE: 'save',
        DELETE: 'delete',
        VIEW: 'view',
        UPDATE: 'update',
        CREATED: 'CREATED',
        //Polling Interval
        POLLING_INTERVAL: 5000
        //Login
    });
