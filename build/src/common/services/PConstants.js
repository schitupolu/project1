angular.module('project.pconstants', [])
    .constant('P_ConstantsService', {
        STATUS_CODE_OK: 200,
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
        HTTP: 'http',
        //Polling Interval
        POLLING_INTERVAL: 5000,
        //Dashboard
        COMMENTS: 'Comments'

    });
