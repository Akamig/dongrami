/**
 * Account is a implementation to perform cryptographic signing and verifying them.
 *
 * Accounts can be provided from the @planetarium/account-* packages or third-parties
 * using the name `planetarium-account-*`.
 */
export interface Account {
  /**
   * Account interface is versioned to safely make changes to the account interface.
   * The users should make sure if the account is compatible with the sign interface
   * they are using.
   */
  readonly VERSION: number;

  getPublicKey(isCompressed?: boolean): Promise<Uint8Array>;
  /**
   * Sign a given bytes. The function must return a valid ECDSA signature using
   * 'SECP256K1' curve.
   *
   * @param data A payload to sign.
   */
  sign(hash: Uint8Array): Promise<Uint8Array>;
}
