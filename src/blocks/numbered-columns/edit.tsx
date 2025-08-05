import type { InterpretedAttributes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	BlockControls,
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	BaseControl,
	Panel,
	PanelBody,
	ToolbarGroup,
} from "@wordpress/components";
import { useEffect, useRef, useState } from "react";
import { NumberInput } from "@launchpadBlocks/__components__/NumberInput";
import { HeadingLevelSelect } from "@launchpadBlocks/helpers.editor";
import { attributes as definedAttributeOptions } from "./attributes";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

export function Edit({ attributes, setAttributes }: BlockEditProps) {
	const { columns, headerElement } = attributes;
	const blockProps = useBlockProps();

	const timeout = useRef<NodeJS.Timeout | undefined>();
	const [columnCount, setColumnCount] = useState(columns.length);

	useEffect(() => {
		// Prevent wiping data on initial load.
		if (columnCount === undefined) {
			return;
		}
		clearTimeout(timeout.current);
		timeout.current = setTimeout(() => {
			if (columns.length === columnCount) {
				return;
			}
			if (columns.length < columnCount) {
				const tempColumns = [...columns];
				let currentLastNumber = tempColumns.reduce(
					(currentLastNumber, column) => {
						if (column.id > currentLastNumber) {
							return column.id;
						}
						return currentLastNumber;
					},
					0,
				);
				while (tempColumns.length < columnCount) {
					currentLastNumber++;
					tempColumns.push({
						id: currentLastNumber,
						heading: "",
						text: "",
					});
				}
				setAttributes({
					columns: tempColumns,
				});
			}
			if (columns.length > columnCount) {
				setAttributes({
					columns: [
						...columns.sort((a, b) => a.id - b.id).slice(0, columnCount),
					],
				});
			}
		}, 250);
	}, [columns, columnCount, setAttributes]);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<HeadingLevelSelect
						levelOptions={definedAttributeOptions.headerElement.enum}
						selectedLevel={headerElement}
						setSelectedHeadingLevel={(newHeadingLevel) => {
							setAttributes({ headerElement: newHeadingLevel });
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<BaseControl
							id="columns-count-number-input"
							label="Column count"
							help="Select the number of columns to display."
							__nextHasNoMarginBottom
						>
							<NumberInput
								min={1}
								defaultValue={columnCount}
								onValidation={(newNumber) => {
									setColumnCount(newNumber);
								}}
								required
								allowMetaOrCtrlClick={false}
								allowShiftClick={false}
								allowAltClick={false}
							/>
						</BaseControl>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<ol {...blockProps}>
				{columns.map(({ id, heading, text }) => {
					return (
						<li key={id} className="numbered-columns-list-item">
							<RichText
								tagName={headerElement}
								className="numbered-columns-list-item-heading is-style-t-5"
								onChange={(newHeaderContent) => {
									setAttributes({
										columns: [
											...columns.map((column) => {
												if (id === column.id) {
													column.heading = newHeaderContent;
												}
												return column;
											}),
										],
									});
								}}
								value={heading}
								placeholder={"Add heading..."}
							/>
							<RichText
								tagName={"p"}
								className="numbered-columns-list-item-text"
								onChange={(newTextContent) => {
									setAttributes({
										columns: [
											...columns.map((column) => {
												if (id === column.id) {
													column.text = newTextContent;
												}
												return column;
											}),
										],
									});
								}}
								value={text}
								placeholder={"Add column text..."}
							/>
						</li>
					);
				})}
			</ol>
		</>
	);
}
Edit.displayName = "NumberedColumnsEdit";
