/*
 * JSML 1.0
 * Lisenced under the MIT License
 * By mforoud86
 */

let JSML = function() {
    JSML = {};
    JSML.cookies = "";
    JSML.version = "1.0";
    JSML.input = "";
    JSML.chars = "";
    JSML.index = 0;
    JSML.temp = [];
    JSML.query = function(query) {
        return document.querySelector(query);
    };
    JSML.queryAll = function(query) {
        return document.querySelectorAll(query);
    };
    JSML.peek = function() {
        return JSML.chars[index++];
    }
    JSML.get = function() {
        return JSML.chars[index];
    }
    JSML.getLast = function() {
        if (JSML.temp[JSML.temp.length - 1] == undefined) {
            return JSON.parse(`{"type": "empty", "value": {}}`);
        } else {
            return JSML.temp[JSML.temp.length - 1];
        }
    }
    JSML.parse = function(element) {
        if (element == undefined) {
            JSML.queryAll("*[JSML]").forEach((obj) => {
                JSML.parse(obj);
            });
        } else {
            JSML.input = element.innerHTML;
            JSML.chars = element.innerHTML.split('');
            JSML.index = 0;
            JSML.temp = [];

            for (index = 0; index < JSML.chars.length; index++) {
                let last = JSML.getLast();


            }

            element.setAttribute("compiled", "");
            element.innerHTML = "<!-- Parsed with JSML -->";
        }
    };

    return JSML;
};