import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes, InterpretedUsedContext>;
export declare function Edit({ attributes, setAttributes, clientId }: BlockEditProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Edit {
    var displayName: string;
}
//# sourceMappingURL=edit.d.ts.map