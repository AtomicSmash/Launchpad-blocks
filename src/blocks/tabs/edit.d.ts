import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes, InterpretedUsedContext>;
export type FillProps = {
    selectedTab: string | undefined;
    setSelectedTab: (newValue: string) => void;
    initiallySelectedTab: string | undefined;
    setInitiallySelectedTab: (newValue: string) => void;
};
export declare function Tab({ tabsGroupId, id, label, onChange, tabOrder, }: {
    tabsGroupId: string;
    id: string;
    label: string;
    onChange: (newLabel: string) => void;
    tabOrder: number;
}): import("react/jsx-runtime").JSX.Element;
export declare function Edit({ clientId, attributes, setAttributes }: BlockEditProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Edit {
    var displayName: string;
}
//# sourceMappingURL=edit.d.ts.map