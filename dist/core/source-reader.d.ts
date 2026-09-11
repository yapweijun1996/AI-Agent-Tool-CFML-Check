import type { CheckLimits, LoadedSource } from "../schema/types.js";
export declare function loadSource(options: {
    root: string;
    file: string;
    limits: CheckLimits;
}): LoadedSource;
