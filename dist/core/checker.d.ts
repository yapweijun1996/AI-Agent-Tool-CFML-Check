import type { CapabilitiesData, CheckData, CheckLimits, Envelope, CheckOptions } from "../schema/types.js";
export declare function capabilities(limitsInput?: Partial<CheckLimits>): Envelope<CapabilitiesData>;
export declare function checkFile(options: CheckOptions): {
    envelope: Envelope<CheckData>;
    exit_code: 0 | 1 | 2 | 3 | 4;
};
