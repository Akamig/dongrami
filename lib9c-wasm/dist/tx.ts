import dotnet from "./dotnet";
export function buildUnsignedTransaction(nonce: number, publicKey: Uint8Array, signer: Uint8Array, genesisHash: Uint8Array, action: Uint8Array): Uint8Array {
    return dotnet.Lib9c.Wasm.buildRawTransaction(nonce, publicKey, signer, genesisHash, action);
}
export function attachSignature(unsignedTx: Uint8Array, signature: Uint8Array): Uint8Array {
    return dotnet.Lib9c.Wasm.attachSignature(unsignedTx, signature);
}
