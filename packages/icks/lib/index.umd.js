(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.icks = {}));
})(this, (function (exports) { 'use strict';

    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }

    var icks = /*#__PURE__*/Object.freeze({
        __proto__: null,
        add: add,
        subtract: subtract
    });

    exports.add = add;
    exports.default = icks;
    exports.icks = icks;
    exports.subtract = subtract;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
