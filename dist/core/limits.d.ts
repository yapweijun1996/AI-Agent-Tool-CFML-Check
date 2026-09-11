import type { CheckLimits } from "../schema/types.js";
export declare const DEFAULT_LIMITS: CheckLimits;
export declare const HARD_LIMITS: CheckLimits;
export declare function normalizeLimits(requested: Partial<CheckLimits> | undefined): CheckLimits;
