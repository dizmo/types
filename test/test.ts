import { expect } from "chai";

import { Bundle } from "../lib";
declare const bundle: Bundle;
import { Dizmo } from "../lib";
declare const dizmo: Dizmo;
import { Global } from "../lib";
declare const global: Global;
import { Storage } from "../lib";
declare const storage: Storage;
import { Viewer } from "../lib";
declare const viewer: Viewer;

import { UUID } from "../lib";

import "mocha";

describe("Global", () => {
    it("should exist", () => {
        expect(typeof global).to.not.eq("undefined");
    });
    it("should be an object", () => {
        expect(typeof global).to.eq("object");
    });
    it("should be referenceable", () => {
        expect(global).to.not.eq(undefined);
    });
});
describe("UUID", () => {
    const uuid: UUID = "00000000-0000-0000-0000-000000000000";
    it("should exist", () => {
        expect(typeof uuid).to.not.eq("undefined");
    });
    it("should be an string", () => {
        expect(typeof uuid).to.eq("string");
    });
    it("should be referenceable", () => {
        expect(uuid).to.not.eq(undefined);
    });
});

describe("Bundle", () => {
    it("should not exist", () => {
        expect(typeof bundle).to.eq("undefined");
    });
    it("should not be referenceable", () => {
        expect(() => bundle).to.throw(ReferenceError);
    });
});
describe("Dizmo", () => {
    it("should not exist", () => {
        expect(typeof dizmo).to.eq("undefined");
    });
    it("should not be referenceable", () => {
        expect(() => dizmo).to.throw(ReferenceError);
    });
});
describe("Storage", () => {
    it("should not exist", () => {
        expect(typeof storage).to.eq("undefined");
    });
    it("should not be referenceable", () => {
        expect(() => storage).to.throw(ReferenceError);
    });
});
describe("Viewer", () => {
    it("should not exist", () => {
        expect(typeof viewer).to.eq("undefined");
    });
    it("should not be referenceable", () => {
        expect(() => viewer).to.throw(ReferenceError);
    });
});
