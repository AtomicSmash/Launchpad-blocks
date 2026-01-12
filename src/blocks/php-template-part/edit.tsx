import type { InterpretedAttributes, AllValuesWithTypes } from "./attributes";
import type { InterpretedUsedContext } from "./context";
import type { CreateBlockEditProps } from "@atomicsmash/blocks-helpers";
import {
	InspectorControls,
	useBlockProps,
	BlockContextProvider,
} from "@wordpress/block-editor";
import {
	BaseControl,
	Button,
	__experimentalToggleGroupControl as ToggleGroupControl,
	Panel,
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";
import { useState } from "react";
import { NumberInput } from "../__components__/NumberInput";

export type BlockEditProps = CreateBlockEditProps<
	InterpretedAttributes,
	InterpretedUsedContext
>;

function translateArrayWithFieldTypes(array: AllValuesWithTypes[]) {
	const newArray: AllValues[] = [];
	for (const [index, { type, value }] of array.entries()) {
		switch (type) {
			case "string":
				newArray[index] = value;
				break;
			case "number":
				newArray[index] = Number(value);
				break;
			case "boolean":
				newArray[index] = value === "true";
				break;
			case "array":
				newArray[index] = translateArrayWithFieldTypes(value);
				break;
			case "object":
				newArray[index] = translateObjectWithFieldTypes(value);
				break;
		}
	}
	return newArray;
}

function translateObjectWithFieldTypes(
	object: Record<string, AllValuesWithTypes>,
) {
	const newObject: Record<string, AllValues> = {};
	for (const [key, { type, value }] of Object.entries(object)) {
		switch (type) {
			case "string":
				newObject[key] = value;
				break;
			case "number":
				newObject[key] = Number(value);
				break;
			case "boolean":
				newObject[key] = value === "true";
				break;
			case "array":
				newObject[key] = translateArrayWithFieldTypes(value);
				break;
			case "object":
				newObject[key] = translateObjectWithFieldTypes(value);
				break;
		}
	}
	return newObject;
}

function translateToArrayWithFieldTypes(array: AllValues[]) {
	const newArray: AllValuesWithTypes[] = [];
	for (const [index, value] of array.entries()) {
		if (Array.isArray(value)) {
			newArray[index] = {
				type: "array",
				value: translateToArrayWithFieldTypes(value),
			};
		} else {
			switch (typeof value) {
				case "object":
					newArray[index] = {
						type: "object",
						value: translateToObjectWithFieldTypes(value),
					};
					break;
				case "boolean":
					newArray[index] = { type: "boolean", value: `${value}` };
					break;
				case "number":
					newArray[index] = { type: "number", value: `${value}` };
					break;
				default:
					newArray[index] = { type: "string", value: `${value}` };
			}
		}
	}
	return newArray;
}

function translateToObjectWithFieldTypes(object: Record<string, AllValues>) {
	const newObject: Record<string, AllValuesWithTypes> = {};
	for (const [key, value] of Object.entries(object)) {
		if (Array.isArray(value)) {
			newObject[key] = {
				type: "array",
				value: translateToArrayWithFieldTypes(value),
			};
		} else {
			switch (typeof value) {
				case "object":
					newObject[key] = {
						type: "object",
						value: translateToObjectWithFieldTypes(value),
					};
					break;
				case "boolean":
					newObject[key] = { type: "boolean", value: `${value}` };
					break;
				case "number":
					newObject[key] = { type: "number", value: `${value}` };
					break;
				default:
					newObject[key] = { type: "string", value: `${value}` };
			}
		}
	}
	return newObject;
}

type AllValues =
	| string
	| boolean
	| number
	| AllValues[]
	| { [k: string]: AllValues };
export function Edit({ attributes, setAttributes, context }: BlockEditProps) {
	const blockProps = useBlockProps();
	const {
		templatePartSlug,
		templatePartName,
		args: argsWithFieldTypes,
	} = attributes;

	const args = translateObjectWithFieldTypes(argsWithFieldTypes);
	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={"Slug"}
							help={"The slug name for the generic template."}
							onChange={(newText) => {
								setAttributes({
									templatePartSlug: newText,
								});
							}}
							value={templatePartSlug}
						/>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={"Name"}
							help={"The name of the specialized template."}
							onChange={(newText) => {
								setAttributes({
									templatePartName: newText,
								});
							}}
							value={templatePartName}
						/>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody title="Arguments">
						<ObjectControl
							namePrefix={"args"}
							defaultValue={args}
							onChange={(newObject) => {
								setAttributes({
									args: translateToObjectWithFieldTypes(newObject),
								});
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<BlockContextProvider
					value={{
						postId: context.postId,
					}}
				>
					<ServerSideRender
						block="launchpad-blocks/php-template-part"
						attributes={attributes}
						urlQueryArgs={{ post_id: context.postId }}
					/>
				</BlockContextProvider>
			</div>
		</>
	);
}
Edit.displayName = "PHPTemplatePartEdit";

function ArrayValueControl({
	namePrefix,
	itemIdOrKey,
	defaultValue,
	onChange,
	addRow,
	removeRow,
}: {
	namePrefix: string;
	itemIdOrKey: string | number;
	defaultValue: AllValues;
	onChange: (newValue: AllValues) => void;
	addRow: () => void;
	removeRow: () => void;
}) {
	const fieldType = Array.isArray(defaultValue)
		? "array"
		: typeof defaultValue === "string"
			? "string"
			: typeof defaultValue === "number"
				? "number"
				: typeof defaultValue === "boolean"
					? "boolean"
					: "object";

	return (
		<>
			<SelectControl
				__nextHasNoMarginBottom
				label="Type of field"
				multiple={false}
				value={fieldType}
				options={[
					{ label: "String", value: "string" },
					{ label: "Number", value: "number" },
					{ label: "Boolean", value: "boolean" },
					{ label: "Array", value: "array" },
					{ label: "Object", value: "object" },
				]}
				onChange={(newFieldType) => {
					const isCurrentlyObjectOrArray =
						Array.isArray(defaultValue) || typeof defaultValue === "object";
					switch (newFieldType) {
						case "string":
							onChange(
								typeof defaultValue === "string"
									? defaultValue
									: isCurrentlyObjectOrArray
										? ""
										: `${defaultValue}`,
							);
							break;
						case "number":
							onChange(
								typeof defaultValue === "number"
									? defaultValue
									: isNaN(Number(defaultValue))
										? 0
										: Number(defaultValue),
							);
							break;
						case "boolean":
							onChange(
								typeof defaultValue === "boolean" ? defaultValue : false,
							);
							break;
						case "object":
							onChange(
								typeof defaultValue === "object" && !Array.isArray(defaultValue)
									? defaultValue
									: {},
							);
							break;
						case "array":
							onChange(Array.isArray(defaultValue) ? defaultValue : []);
							break;
					}
				}}
				__next40pxDefaultSize
			/>
			<input
				type="hidden"
				name={`${namePrefix}__${itemIdOrKey}-type`}
				value={fieldType}
			/>
			{fieldType === "string" ? (
				<TextControl
					__nextHasNoMarginBottom
					__next40pxDefaultSize
					label={"Value"}
					name={`${namePrefix}__${itemIdOrKey}`}
					value={typeof defaultValue === "string" ? defaultValue : ""}
					onChange={(newValue) => {
						onChange(newValue);
					}}
				/>
			) : fieldType === "number" ? (
				<BaseControl
					id="value-number-input"
					label="Value"
					__nextHasNoMarginBottom
				>
					<NumberInput
						defaultValue={typeof defaultValue === "number" ? defaultValue : 0}
						required
						name={`${namePrefix}__${itemIdOrKey}`}
						onValidation={(newValue) => {
							onChange(newValue);
						}}
					/>
				</BaseControl>
			) : fieldType === "boolean" ? (
				<ToggleControl
					__nextHasNoMarginBottom
					checked={typeof defaultValue === "boolean" ? defaultValue : false}
					label={"Value"}
					name={`${namePrefix}__${itemIdOrKey}`}
					onChange={(newValue) => {
						onChange(newValue);
					}}
				/>
			) : fieldType === "array" ? (
				<ArrayControl
					namePrefix={`${namePrefix}__${itemIdOrKey}`}
					defaultValue={Array.isArray(defaultValue) ? defaultValue : []}
					onChange={(newArray) => onChange(newArray)}
				/>
			) : fieldType === "object" ? (
				<ObjectControl
					namePrefix={`${namePrefix}__${itemIdOrKey}`}
					defaultValue={
						typeof defaultValue === "object" &&
						defaultValue &&
						!Array.isArray(defaultValue)
							? defaultValue
							: {}
					}
					onChange={(newObject) => onChange(newObject)}
				/>
			) : null}
			<ToggleGroupControl
				__next40pxDefaultSize
				label="Actions"
				hideLabelFromVision
				__nextHasNoMarginBottom
			>
				<Button
					variant="primary"
					isDestructive
					onClick={() => {
						removeRow();
					}}
				>
					Delete
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						addRow();
					}}
				>
					Add after
				</Button>
			</ToggleGroupControl>
		</>
	);
}

function ArrayControl({
	namePrefix,
	defaultValue,
	onChange,
}: {
	namePrefix: string;
	defaultValue: AllValues[];
	onChange: (newArray: AllValues[]) => void;
}) {
	const addRow = () => onChange([...defaultValue, ""]);
	return (
		<div className="array-values">
			{defaultValue.map((arrayItem, arrayIndex) => {
				return (
					<ArrayValueControl
						namePrefix={namePrefix}
						key={arrayIndex}
						itemIdOrKey={arrayIndex}
						defaultValue={arrayItem}
						onChange={(newValue) => {
							const newArray = defaultValue;
							newArray[arrayIndex] = newValue;
							onChange(newArray);
						}}
						addRow={addRow}
						removeRow={() => {
							onChange(defaultValue.splice(arrayIndex, 1));
						}}
					/>
				);
			})}
			{defaultValue.length === 0 ? (
				<ToggleGroupControl
					__next40pxDefaultSize
					label="Actions"
					hideLabelFromVision
					__nextHasNoMarginBottom
				>
					<Button variant="primary" onClick={addRow}>
						Add an item
					</Button>
				</ToggleGroupControl>
			) : null}
		</div>
	);
}

function ObjectControl({
	namePrefix,
	defaultValue,
	onChange,
}: {
	namePrefix: string;
	defaultValue: Record<string, AllValues>;
	onChange: (newObject: Record<string, AllValues>) => void;
}) {
	const entries = Object.entries(defaultValue);
	const addRow = () => onChange({ ...defaultValue, "": "" });
	return (
		<div className="object-values">
			{entries.map(([originalKey, value]) => {
				return (
					<ObjectValueControl
						namePrefix={namePrefix}
						key={originalKey}
						originalKey={originalKey}
						defaultValue={value}
						onChange={(key, newValue, newKey) => {
							let newObject = defaultValue;
							if (newKey && key !== newKey) {
								const keys = Object.keys(defaultValue);
								newObject = keys.reduce(
									(recreatedObject, objectKey) => {
										const objectValue = defaultValue[objectKey] as AllValues;
										if (objectKey === key) {
											// Rename key only
											recreatedObject[newKey] = objectValue;
										} else {
											recreatedObject[objectKey] = objectValue;
										}
										return recreatedObject;
									},
									{} as Record<string, AllValues>,
								);
								key = newKey;
							}
							// Update value
							newObject[key] = newValue;
							onChange(newObject);
						}}
						addRow={addRow}
						removeRow={() => {
							const { [originalKey]: removedValue, ...newObject } =
								defaultValue;
							onChange(newObject);
						}}
					/>
				);
			})}
			{entries.length === 0 ? (
				<ToggleGroupControl
					__next40pxDefaultSize
					label="Actions"
					hideLabelFromVision
					__nextHasNoMarginBottom
				>
					<Button variant="primary" onClick={addRow}>
						Add an item
					</Button>
				</ToggleGroupControl>
			) : null}
		</div>
	);
}

function ObjectValueControl({
	namePrefix,
	defaultValue,
	originalKey,
	onChange,
	addRow,
	removeRow,
}: {
	namePrefix: string;
	originalKey: string;
	defaultValue: AllValues;
	onChange: (key: string, newValue: AllValues, newKey?: string) => void;
	addRow: () => void;
	removeRow: () => void;
}) {
	const [newKey, setNewKey] = useState(originalKey);

	return (
		<>
			<TextControl
				__nextHasNoMarginBottom
				__next40pxDefaultSize
				label={"Key"}
				onChange={(newText) => {
					setNewKey(newText);
				}}
				onBlur={() => onChange(originalKey, defaultValue, newKey)}
				value={newKey}
			/>
			<ArrayValueControl
				namePrefix={namePrefix}
				itemIdOrKey={originalKey}
				defaultValue={defaultValue}
				onChange={(newValue) => {
					onChange(originalKey, newValue);
				}}
				addRow={() => {
					addRow();
				}}
				removeRow={() => {
					removeRow();
				}}
			/>
		</>
	);
}
