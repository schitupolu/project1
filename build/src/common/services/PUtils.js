angular.module('project.putils', [])

    .factory('P_UtilsService', [function () {

        var pUtilsFactory = {};
        /**
         * Check if @param value is null or undefined
         */

        pUtilsFactory.isNull = function (value) {
            if ((value == null) || (typeof value == 'undefined')) {
                return true;
            }
            return false;
        },

            pUtilsFactory.notNull = function (value) {
                return !this.isNull(value);
            },

        /**
         * Check if @param obj is empty or undefined. This will parse the object
         * and if no property found return @code true , @code false otherwise
         */
            pUtilsFactory.isObjectEmpty = function (obj) {
                if (typeof obj != "object") {
                    return false;
                }
                if (!this.isNull(obj.length)) {
                    return (obj.length === 0);
                } else {
                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            return false;
                        }
                    }
                }
                return true;
            },

        /**
         * Check if @param value is empty or undefined
         */
            pUtilsFactory.isEmpty = function (value) {
                return this.isNull(value) || (value === "") ||
                    this.isObjectEmpty(value);
            },

        /**
         * Helper function to check if object contains value hasValue("test", "t")
         * --> true hasValue(["test1", "test2"], "test1") --> true
         */
            pUtilsFactory.hasValue = function (obj, value) {
                var foundValue = false;
                if (this.notNull(obj) && typeof obj == "object") {
                    angular.forEach(obj, function (entry, i) {
                        if (entry == value) {
                            foundValue = true;
                        }
                    });
                } else if (this.notNull(obj) && typeof obj == "string") {
                    foundValue = (obj.indexOf(value) > -1);
                }
                return foundValue;
            },

        /**
         * Helper function to check if object contains value hasName("test", "t")
         * --> true hasValue(["test1", "test2"], "test1") --> true
         */
            pUtilsFactory.hasName = function (obj, value) {
                var foundValue = false;
                if (this.notNull(obj) && typeof obj == "object") {
                    angular.forEach(obj, function (entry, i) {
                        if (entry.name == value) {
                            foundValue = true;
                        }
                    });
                } else if (this.notNull(obj) && typeof obj == "string") {
                    foundValue = (obj.indexOf(value) > -1);
                }
                return foundValue;
            },

        /**
         * Helper function to trim/format value E.g " test" ->"test" undefined - ""
         */
            pUtilsFactory.trimValue = function (value) {
                var trimmedValue = "";
                if (!this.notNull(value)) {
                    return trimmedValue;
                } else {
                    trimmedValue = value.trim(String(value));
                }
                return trimmedValue;
            },

        /**
         * Open url in new window.
         */
            pUtilsFactory.openNewWindow = function (url) {
                if (this.notEmpty(url)) {
                    window.open(url);
                }
            },

        /**
         * Return unique number
         */
            pUtilsFactory.getUniqueNum = function () {
                var time = (new Date()).getTime();
                return time;
            },

        /**
         * Create customized logger, which may be easily switched back for dev/prod
         * servers. easily control the log levels. e.g switch off all level will be
         * window.console = {log = {}, debug = {} ..}
         */
            pUtilsFactory.getLog = function () {
                return console;
            },

        /**
         * function to capitalize the first character
         * @returns {string}
         */
            pUtilsFactory.capitalizeCharacter = function (str) {
                return str.charAt(0).toUpperCase() + str.substring(1);
            };

        return pUtilsFactory;
    }]);
