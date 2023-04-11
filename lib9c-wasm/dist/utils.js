"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeObjectAsDotnet = exports.Currency = exports.Address = exports.Guid = exports.toHex = exports.parseHex = void 0;
const uuid_1 = require("uuid");
const address_1 = require("@ethersproject/address");
function parseHex(hex) {
    return Uint8Array.from(Buffer.from(hex, "hex"));
}
exports.parseHex = parseHex;
function toHex(buf) {
    return Buffer.from(buf).toString("hex");
}
exports.toHex = toHex;
class Guid {
    constructor(raw) {
        this.raw = raw;
        if (!(0, uuid_1.validate)(raw)) {
            throw new Error("Not suitable for Guid");
        }
    }
    serializeAsDotnet() {
        return this.raw;
    }
}
exports.Guid = Guid;
class Address {
    constructor(raw) {
        this.raw = raw;
        if (!(0, address_1.isAddress)(raw)) {
            throw new Error("Invalid Address.");
        }
    }
    serializeAsDotnet() {
        return this.raw;
    }
}
exports.Address = Address;
class Currency {
    constructor(value) {
        this.value = value;
    }
    serializeAsDotnet() {
        return {
            ...this.value,
            minters: this.value.minters?.map(addr => addr.serializeAsDotnet()),
        };
    }
}
exports.Currency = Currency;
function serializeObjectAsDotnet(obj) {
    if (!(obj instanceof Object)) {
        return obj;
    }
    if (obj instanceof Address) {
        return obj.serializeAsDotnet();
    }
    if (obj instanceof Guid) {
        return obj.serializeAsDotnet();
    }
    if (obj instanceof Currency) {
        return obj.serializeAsDotnet();
    }
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, serializeObjectAsDotnet(v)]));
}
exports.serializeObjectAsDotnet = serializeObjectAsDotnet;
