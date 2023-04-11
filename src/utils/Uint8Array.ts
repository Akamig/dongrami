export function Uint8ArrayToHex(array: Uint8Array) {
  return Array.from(array)
    .map((i) => i.toString(16).padStart(2, '0'))
    .join('');
}

export function HexToUint8Array(hexString: string) {
  hexString = hexString.replace(/^0x/, '');

  const data = hexString
    .match(/.{1,2}/g)
    ?.map((byte: string) => parseInt(byte, 16));

  if (!data) {
    return new Uint8Array();
  }

  return Uint8Array.from(data);
}

export function Uint8ArrayEquals(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
