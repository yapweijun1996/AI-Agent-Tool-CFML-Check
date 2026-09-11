export class ToolFailure extends Error {
    code;
    exitCode;
    constructor(code, message, exitCode) {
        super(message);
        this.code = code;
        this.exitCode = exitCode;
        this.name = "ToolFailure";
    }
}
