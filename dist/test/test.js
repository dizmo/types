"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
describe("Global", function () {
    it("should exist", function () {
        chai_1.expect(typeof global === "undefined" ? "undefined" : _typeof(global)).to.not.eq("undefined");
    });
    it("should be an object", function () {
        chai_1.expect(typeof global === "undefined" ? "undefined" : _typeof(global)).to.eq("object");
    });
    it("should be referenceable", function () {
        chai_1.expect(global).to.not.eq(undefined);
    });
});
describe("UUID", function () {
    var uuid = "00000000-0000-0000-0000-000000000000";
    it("should exist", function () {
        chai_1.expect(typeof uuid === "undefined" ? "undefined" : _typeof(uuid)).to.not.eq("undefined");
    });
    it("should be an string", function () {
        chai_1.expect(typeof uuid === "undefined" ? "undefined" : _typeof(uuid)).to.eq("string");
    });
    it("should be referenceable", function () {
        chai_1.expect(uuid).to.not.eq(undefined);
    });
});
describe("Bundle", function () {
    it("should not exist", function () {
        chai_1.expect(typeof bundle === "undefined" ? "undefined" : _typeof(bundle)).to.eq("undefined");
    });
    it("should not be referenceable", function () {
        chai_1.expect(function () {
            return bundle;
        }).to.throw(ReferenceError);
    });
});
describe("Dizmo", function () {
    it("should not exist", function () {
        chai_1.expect(typeof dizmo === "undefined" ? "undefined" : _typeof(dizmo)).to.eq("undefined");
    });
    it("should not be referenceable", function () {
        chai_1.expect(function () {
            return dizmo;
        }).to.throw(ReferenceError);
    });
});
describe("Storage", function () {
    it("should not exist", function () {
        chai_1.expect(typeof storage === "undefined" ? "undefined" : _typeof(storage)).to.eq("undefined");
    });
    it("should not be referenceable", function () {
        chai_1.expect(function () {
            return storage;
        }).to.throw(ReferenceError);
    });
});
describe("Viewer", function () {
    it("should not exist", function () {
        chai_1.expect(typeof viewer === "undefined" ? "undefined" : _typeof(viewer)).to.eq("undefined");
    });
    it("should not be referenceable", function () {
        chai_1.expect(function () {
            return viewer;
        }).to.throw(ReferenceError);
    });
});
//# sourceMappingURL=test.js.map