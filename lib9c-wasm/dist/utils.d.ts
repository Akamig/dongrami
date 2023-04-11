export declare function parseHex(hex: string): Uint8Array;
export declare function toHex(buf: Uint8Array): string;
interface DotnetType {
    serializeAsDotnet(): any;
}
export declare class Guid implements DotnetType {
    private readonly raw;
    constructor(raw: string);
    serializeAsDotnet(): string;
}
export declare class Address implements DotnetType {
    private readonly raw;
    constructor(raw: string);
    serializeAsDotnet(): string;
}
export declare class Currency implements DotnetType {
    private readonly value;
    constructor(value: {
        ticker: string;
        decimalPlaces: number;
        minters?: Address[];
    });
    serializeAsDotnet(): {
        minters: string[] | undefined;
        ticker: string;
        decimalPlaces: number;
    };
}
export declare function serializeObjectAsDotnet(obj: Object): Object;
export {};
