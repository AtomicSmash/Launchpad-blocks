import type { Attributes, InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { Supports } from "./supports";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	ContrastChecker,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { ColourSelectControl } from "../helpers.editor";
import { attributes as attributesDefinition } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { type, markerColour, markerType, markerInnerColour, columnCount } =
		attributes;
	const ListComponent = type == "ul" ? "ul" : "ol";

	const isMarkerType = type === "ul" && markerType === "normal";
	const hasMarkerColour = !!markerColour;
	const hasMarkerInnerColour = !!markerInnerColour && !isMarkerType;
	const shouldHaveIcon = type === "ul" && markerType === "icon";

	const blockProps = useBlockProps({
		style: {
			"--column-count": columnCount,
			...(hasMarkerColour
				? {
						"--marker-colour": markerColour,
					}
				: {}),
			...(hasMarkerInnerColour
				? {
						"--marker-inner-colour": markerInnerColour,
					}
				: {}),
		},
		className: [
			hasMarkerColour ? "has-marker-colour" : undefined,
			hasMarkerInnerColour ? "has-marker-inner-colour" : undefined,
			shouldHaveIcon ? "should-have-icon" : undefined,
		]
			.filter(Boolean)
			.join(" "),
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["launchpad-blocks/fancy-list-item"]],
	});

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="List options">
						<RangeControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							help="Please select how many list items you want to show on a single row. It may be less than your selected value if there are space constraints."
							initialPosition={1}
							label="Max columns"
							max={10}
							min={1}
							onChange={(newColumnCount) => {
								setAttributes({ columnCount: newColumnCount });
							}}
							allowReset
							value={columnCount}
						/>
						<ToggleGroupControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							isBlock
							label="Type of list"
							onChange={(newValue) => {
								if (
									typeof newValue === "string" &&
									["ul", "ol"].includes(newValue)
								) {
									setAttributes({ type: newValue as "ul" | "ol" });
								}
							}}
							value={type}
						>
							<ToggleGroupControlOption label="Bullet list" value="ul" />
							<ToggleGroupControlOption label="Numbered list" value="ol" />
						</ToggleGroupControl>
						{type === "ul" ? (
							<ToggleGroupControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								isBlock
								label="Type of list marker"
								onChange={(newValue) => {
									if (
										typeof newValue === "string" &&
										["normal", "icon"].includes(newValue)
									) {
										setAttributes({
											markerType: newValue as "normal" | "icon",
										});
									}
								}}
								value={markerType}
							>
								<ToggleGroupControlOption label="Normal" value="normal" />
								<ToggleGroupControlOption label="Icon" value="icon" />
							</ToggleGroupControl>
						) : null}
					</PanelBody>
				</Panel>
			</InspectorControls>
			<InspectorControls group="styles">
				{type === "ul" ? (
					markerType === "normal" ? (
						<ColourSelectControl<Supports, Attributes>
							colours={[
								{ attributeName: "markerColour", label: "Marker colour" },
							]}
							attributes={attributes}
							attributesDefinition={attributesDefinition}
							setAttributes={setAttributes}
						/>
					) : (
						<>
							<ColourSelectControl<Supports, Attributes>
								colours={[
									{ attributeName: "markerColour", label: "Background colour" },
									{
										attributeName: "markerInnerColour",
										label: "Icon colour",
									},
								]}
								attributes={attributes}
								attributesDefinition={attributesDefinition}
								setAttributes={setAttributes}
							/>
							<ContrastChecker
								backgroundColor={markerColour}
								textColor={markerInnerColour}
							/>
						</>
					)
				) : (
					<>
						<ColourSelectControl<Supports, Attributes>
							colours={[
								{ attributeName: "markerColour", label: "Background colour" },
								{ attributeName: "markerInnerColour", label: "Number colour" },
							]}
							attributes={attributes}
							attributesDefinition={attributesDefinition}
							setAttributes={setAttributes}
						/>
						<ContrastChecker
							backgroundColor={markerColour}
							textColor={markerInnerColour}
						/>
					</>
				)}
			</InspectorControls>
			<ListComponent {...innerBlocksProps} />
		</>
	);
}
Edit.displayName = "FancyListEdit";
