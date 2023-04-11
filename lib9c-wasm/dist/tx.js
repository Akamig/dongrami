"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachSignature = exports.buildUnsignedTransaction = void 0;
const dotnet_1 = __importDefault(require("./dotnet"));
function buildUnsignedTransaction(nonce, publicKey, signer, genesisHash, action) {
    return dotnet_1.default.Lib9c.Wasm.buildRawTransaction(nonce, publicKey, signer, genesisHash, action);
}
exports.buildUnsignedTransaction = buildUnsignedTransaction;
function attachSignature(unsignedTx, signature) {
    return dotnet_1.default.Lib9c.Wasm.attachSignature(unsignedTx, signature);
}
exports.attachSignature = attachSignature;
