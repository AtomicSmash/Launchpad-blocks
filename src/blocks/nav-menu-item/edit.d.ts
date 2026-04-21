import type { InterpretedAttributes } from "./attributes";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
export type BlockEditProps = CreateBlockEditProps<InterpretedAttributes>;
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
export declare function Edit({ clientId, isSelected, attributes: { linkText, linkHref, linkTarget }, setAttributes, }: BlockEditProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Edit {
    var displayName: string;
}
//# sourceMappingURL=edit.d.ts.map