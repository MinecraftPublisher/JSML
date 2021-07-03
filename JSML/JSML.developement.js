/*
 * JSML 1.0
 * Lisenced under the MIT License
 * By mforoud86
 */

let JSML = function() {
    JSML = {};
    JSML.cookies = "";
    JSML.version = "1.0";
    JSML.query = function(query) {
        return document.querySelector(query);
    };
    JSML.queryAll = function(query) {
        return document.querySelectorAll(query);
    };
    JSML.peek = function() {
        return chars[index++];
    }
    JSML.get = function() {
        return chars[index];
    }
    JSML.parse = function(element) {
        if (element == undefined) {
            JSML.queryAll("*[JSML]").forEach((obj) => {
                JSML.parse(obj);
            });
        } else {
            JSML.input = element.innerHTML;
            JSML.chars = input.split('');
            JSML.index = 0;

            for (index = 0; index < chars.length; index++) {

            }
        }
    };

    return JSML;
};