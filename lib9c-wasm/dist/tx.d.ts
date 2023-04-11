export declare function buildUnsignedTransaction(nonce: number, publicKey: Uint8Array, signer: Uint8Array, genesisHash: Uint8Array, action: Uint8Array): Uint8Array;
export declare function attachSignature(unsignedTx: Uint8Array, signature: Uint8Array): Uint8Array;
