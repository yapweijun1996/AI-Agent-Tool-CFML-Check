import type { Finding } from "../schema/types.js";
export declare const PAIRED_TAGS: Set<string>;
export declare const BRANCH_TAGS: Set<string>;
export declare const BODYLESS_TAGS: Set<string>;
interface ScriptRegion {
    content_start: number;
    content_end: number;
}
interface ScanResult {
    findings: Finding[];
    incomplete: Array<{
        code: string;
        message: string;
    }>;
    script_regions: ScriptRegion[];
    saw_cfml_tag: boolean;
}
export declare function scanCfml(source: string, limits: {
    max_nesting: number;
    max_findings: number;
    time_limit_ms: number;
}): ScanResult;
export declare function checkPureScriptCfc(source: string, extension: string, limits: {
    max_nesting: number;
    max_findings: number;
    time_limit_ms: number;
}): ScanResult;
export {};
