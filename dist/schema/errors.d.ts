export declare class ToolFailure extends Error {
    readonly code: string;
    readonly exitCode: 1 | 2 | 3 | 4;
    constructor(code: string, message: string, exitCode: 1 | 2 | 3 | 4);
}
