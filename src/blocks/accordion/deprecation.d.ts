import type { InterpretAttributes, CreateBlockSaveProps } from "@atomicsmash/blocks-helpers";
declare const v1Attributes: {
    readonly isInitiallyOpen: {
        readonly type: "boolean";
        readonly default: false;
    };
    readonly accordionId: {
        readonly type: "string";
        readonly default: "";
    };
    readonly headerContent: {
        readonly type: "string";
    };
    readonly headerElement: {
        readonly type: "string";
        readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
        readonly default: "h2";
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
        readonly isInitiallyOpen: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly accordionId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly headerContent: {
            readonly type: "string";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
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
        readonly isInitiallyOpen: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly accordionId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly headerContent: {
            readonly type: "string";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
    }>, oldInnerBlocks: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
        name: string;
        attributes?: Record<string, unknown> | undefined;
        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
    }[]>[]) => [InterpretAttributes<{
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
        readonly isInitiallyOpen: {
            readonly type: "boolean";
            readonly default: false;
        };
        readonly accordionId: {
            readonly type: "string";
            readonly default: "";
        };
        readonly headerContent: {
            readonly type: "string";
        };
        readonly headerElement: {
            readonly type: "string";
            readonly enum: readonly ["h2", "h3", "h4", "h5", "h6", "p"];
            readonly default: "h2";
        };
    }>, import("@atomicsmash/blocks-helpers").BlockInstanceAsObject<Record<string, unknown>, {
        name: string;
        attributes?: Record<string, unknown> | undefined;
        innerBlocks?: import("@atomicsmash/blocks-helpers").BlockInstanceAsObject[];
    }[]>[]];
    readonly isEligible: () => true;
}];
export {};
//# sourceMappingURL=deprecation.d.ts.map