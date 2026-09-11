import type { Position, SourceLocation } from "../schema/types.js";
export declare class SourceIndex {
    readonly source: string;
    private readonly byteOffsets;
    private readonly lineStarts;
    constructor(source: string);
    byteOffset(index: number): number;
    position(index: number): Position;
    location(start: number, end: number): SourceLocation;
}
