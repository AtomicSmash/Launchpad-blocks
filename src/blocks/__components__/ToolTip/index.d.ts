import * as RadixTooltip from "@radix-ui/react-tooltip";
export declare function Tooltip({ children, content, open, defaultOpen, onOpenChange, ...props }: {
    open?: RadixTooltip.TooltipProps["open"];
    defaultOpen?: RadixTooltip.TooltipProps["defaultOpen"];
    onOpenChange?: RadixTooltip.TooltipProps["onOpenChange"];
    children: RadixTooltip.TooltipTriggerProps["children"];
    content: RadixTooltip.TooltipContentProps["children"];
} & Omit<RadixTooltip.TooltipContentProps, "children" | "content">): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map