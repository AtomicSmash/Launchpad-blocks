import * as RadixTooltip from "@radix-ui/react-tooltip";

export function Tooltip({
	children,
	content,
	open,
	defaultOpen,
	onOpenChange,
	...props
}: {
	open?: RadixTooltip.TooltipProps["open"];
	defaultOpen?: RadixTooltip.TooltipProps["defaultOpen"];
	onOpenChange?: RadixTooltip.TooltipProps["onOpenChange"];
	children: RadixTooltip.TooltipTriggerProps["children"];
	content: RadixTooltip.TooltipContentProps["children"];
} & Omit<RadixTooltip.TooltipContentProps, "children" | "content">) {
	return (
		<RadixTooltip.Provider>
			<style
				dangerouslySetInnerHTML={{
					__html: `
.tooltip-content {
	background-color: #f4f6fc;
	border: 1px solid #707d99;
	border-radius: 10px;
	padding: 0.5rem;
}

.tooltip-arrow {
	fill: #707d99;
}`,
				}}
			></style>
			<RadixTooltip.Root
				open={open}
				defaultOpen={defaultOpen}
				onOpenChange={onOpenChange}
			>
				<RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
				<RadixTooltip.Content
					align="center"
					{...props}
					className={"tooltip-content"}
				>
					{content}
					<RadixTooltip.Arrow className="tooltip-arrow" />
				</RadixTooltip.Content>
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
}
