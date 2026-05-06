import type { InterpretAttributes, CreateBlockSaveProps } from "@atomicsmash/blocks-helpers";
declare const v1Attributes: {
    readonly isMultiple: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly accordionGroupId: {
        readonly type: "string";
        readonly default: "";
    };
    readonly headerElement: {
        readonly type: "string";
        readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
        readonly default: "h2";
    };
    readonly loadPrioritisation: {
        readonly type: "string";
        readonly enum: readonly ["cls", "bot-traffic"];
        readonly default: "cls";
    };
};
type V1Attributes = typeof v1Attributes;
declare const v1Supports: {
    readonly color: true;
    readonly typography: {
        readonly fontSize: true;
        readonly lineHeight: true;
        readonly textAlign: true;
    };
    readonly shadow: true;
    readonly spacing: {
        readonly padding: true;
        readonly margin: true;
    };
};
type V1Supports = typeof v1Supports;
type V1BlockSaveProps = CreateBlockSaveProps<InterpretAttributes<V1Supports, V1Attributes>>;
export declare const deprecated: [{
    readonly attributes: {
        readonly isMultiple: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly accordionGroupId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
        readonly loadPrioritisation: {
            readonly type: "string";
            readonly enum: readonly ["cls", "bot-traffic"];
            readonly default: "cls";
        };
    };
    readonly supports: {
        readonly color: true;
        readonly typography: {
            readonly fontSize: true;
            readonly lineHeight: true;
            readonly textAlign: true;
        };
        readonly shadow: true;
        readonly spacing: {
            readonly padding: true;
            readonly margin: true;
        };
    };
    readonly save: ({ attributes }: V1BlockSaveProps) => import("react/jsx-runtime").JSX.Element;
    readonly migrate: (oldAttributes: InterpretAttributes<{
        readonly color: true;
        readonly typography: {
            readonly fontSize: true;
            readonly lineHeight: true;
            readonly textAlign: true;
        };
        readonly shadow: true;
        readonly spacing: {
            readonly padding: true;
            readonly margin: true;
        };
    }, {
        readonly isMultiple: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly accordionGroupId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
        readonly loadPrioritisation: {
            readonly type: "string";
            readonly enum: readonly ["cls", "bot-traffic"];
            readonly default: "cls";
        };
    }>, oldInnerBlocks: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
        name: string;
        attributes?: Record<string, unknown> | undefined;
        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
    }[]>[]) => [{
        headerElement: "h3" | "h2" | "h4" | "h5" | "h6" | "p";
        isMultiple: boolean;
        accordionGroupId: string;
        loadPrioritisation: "cls" | "bot-traffic";
        align?: undefined;
        className?: string | undefined;
        layout?: import("@atomicsmash/blocks-helpers/dist/layout").AllPossibleLayouts | undefined;
        lock?: {
            move: boolean;
            remove: boolean;
        } | undefined;
        metadata?: {
            name?: string;
        } | undefined;
        style?: {
            background?: ({
                backgroundImage?: {
                    url: string;
                    id: number;
                    source: string;
                    title: string;
                };
            } & {
                backgroundPosition?: string;
            }) | undefined;
            spacing?: ({
                margin: {
                    bottom?: string;
                    left?: string;
                    right?: string;
                    top?: string;
                };
            } & {
                padding: {
                    bottom?: string;
                    left?: string;
                    right?: string;
                    top?: string;
                };
            } & {
                blockGap: string;
            }) | undefined;
        } | undefined;
    }, import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
        name: string;
        attributes?: Record<string, unknown> | undefined;
        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
    }[]>[]];
    readonly isEligible: () => true;
}];
export {};
//# sourceMappingURL=deprecation.d.ts.map