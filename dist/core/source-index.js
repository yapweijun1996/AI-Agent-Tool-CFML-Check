import { TextEncoder } from "node:util";
export class SourceIndex {
    source;
    byteOffsets;
    lineStarts = [0];
    constructor(source) {
        this.source = source;
        this.byteOffsets = new Uint32Array(source.length + 1);
        const encoder = new TextEncoder();
        let byteOffset = 0;
        for (let index = 0; index < source.length;) {
            this.byteOffsets[index] = byteOffset;
            const codePoint = source.codePointAt(index);
            if (codePoint === undefined)
                break;
            const width = codePoint > 0xffff ? 2 : 1;
            const character = source.slice(index, index + width);
            const byteLength = encoder.encode(character).byteLength;
            if (width === 2)
                this.byteOffsets[index + 1] = byteOffset;
            byteOffset += byteLength;
            index += width;
            this.byteOffsets[index] = byteOffset;
            if (character === "\n")
                this.lineStarts.push(index);
        }
    }
    byteOffset(index) {
        const safe = Math.max(0, Math.min(index, this.source.length));
        return this.byteOffsets[safe] ?? 0;
    }
    position(index) {
        const safe = Math.max(0, Math.min(index, this.source.length));
        let low = 0;
        let high = this.lineStarts.length - 1;
        while (low <= high) {
            const middle = Math.floor((low + high) / 2);
            const start = this.lineStarts[middle] ?? 0;
            if (start <= safe)
                low = middle + 1;
            else
                high = middle - 1;
        }
        const lineStart = this.lineStarts[Math.max(0, high)] ?? 0;
        let column = 1;
        for (let cursor = lineStart; cursor < safe;) {
            const codePoint = this.source.codePointAt(cursor);
            if (codePoint === undefined)
                break;
            cursor += codePoint > 0xffff ? 2 : 1;
            column += 1;
        }
        return { line: Math.max(1, high + 1), column };
    }
    location(start, end) {
        return {
            start: this.position(start),
            end: this.position(end),
            start_byte: this.byteOffset(start),
            end_byte: this.byteOffset(end),
        };
    }
}
