import type { IconNames } from "./svgs.editor";
import type { SVGProps } from "react";
export declare function DownArrow(props: SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
export declare function ASCircleLogo(props: SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
    iconName: IconNames;
    size?: string;
    isEditorMode?: boolean;
};
export declare function Icon(props: IconProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=svgs.d.ts.map