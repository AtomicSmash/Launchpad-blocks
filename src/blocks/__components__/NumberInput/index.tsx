import type { ComponentPropsWithRef } from "react";
import { useRef, useId, useState, forwardRef, useEffect } from "react";
import { getUserOperatingSystem } from "@launchpadBlocks/helpers";
import { Icon } from "@launchpadBlocks/svgs";
import { Tooltip } from "../ToolTip";

export const NumberInput = forwardRef<
	HTMLInputElement,
	{
		allowShiftClick?: boolean;
		allowAltClick?: boolean;
		allowMetaOrCtrlClick?: boolean;
		onValidation?: (newValue: number) => void;
	} & (
		| { value: number; defaultValue?: never }
		| { defaultValue?: number; value?: never }
	) &
		Omit<ComponentPropsWithRef<"input">, "type" | "value" | "defaultValue">
>(function NumberInput(
	{
		allowShiftClick = true,
		allowAltClick = true,
		allowMetaOrCtrlClick = true,
		defaultValue,
		value,
		onValidation,
		...inputProps
	},
	_forwardedRef,
) {
	const [numberValue, setNumberValue] = useState(defaultValue ?? value ?? 0);
	useEffect(() => {
		if (value !== undefined) {
			setNumberValue(value);
			if (input.current) {
				input.current.value = value.toString();
			}
		}
	}, [value]);
	const generatedId = useId();
	const uniqueId = inputProps.id ?? generatedId;
	const inputStep = inputProps.step ? Number(inputProps.step) : 1;
	const input = useRef<HTMLInputElement>(null);
	let timeout: ReturnType<typeof setTimeout>;

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `
.number-wrapper {
	position: relative;
	height: 32px;
}

.custom-number-input {
	height: 100%;
	width: 100%;
	-moz-appearance: textfield;
}
.custom-number-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  display: none;
}

.number-buttons {
	display: flex;
	gap: 2px;
	height: calc(100% - 8px);
	padding-block: 1px;
	padding-inline: 2px;
	position: absolute;
	right: 2px;
	top: 3px;
}

.number-button {
	border-radius: 2px;
	border: none;
	padding: 0;
	height: 1.5rem;
	width: 1.5rem;
	flex-basis: 1.5rem;
	display: grid;
	place-content: center;
}

.number-button.inactive {
	background-color: #d9dced;
	color: #6e7591;
}

.number-button.active {
	background-color: #007db8;
	color: #fff;
}

.number-button svg {
	width: 1rem;
	height: 1rem;
}	
`,
				}}
			></style>
			<div className="number-wrapper">
				<input
					ref={input}
					id={uniqueId}
					type="number"
					inputMode="numeric"
					defaultValue={numberValue}
					onInput={(event) => {
						const targetValue = event.currentTarget.value;
						if (!isNaN(Number(targetValue))) {
							setNumberValue(Number(targetValue));
						}
					}}
					onChange={(event) => {
						if (onValidation) {
							clearTimeout(timeout);
							timeout = setTimeout(() => {
								onValidation(Number(event.target.value));
							}, 100);
						}
					}}
					onBlur={(event) => {
						if (onValidation) {
							clearTimeout(timeout);
							timeout = setTimeout(() => {
								onValidation(Number(event.target.value));
							}, 100);
						}
					}}
					onWheel={(event) => event.currentTarget.blur()}
					{...inputProps}
					className={"custom-number-input"}
				/>
				<div className="number-buttons">
					<Tooltip
						content={
							<>
								Click to increase by {inputStep}.
								<br />
								{allowShiftClick ? (
									<>
										Shift click to increase by 10.
										<br />
									</>
								) : null}
								{allowAltClick ? (
									<>
										Alt click to increase by 0.1.
										<br />
									</>
								) : null}
								{allowMetaOrCtrlClick &&
								["Windows", "MacOS"].includes(getUserOperatingSystem()) ? (
									<>
										{getUserOperatingSystem() === "Windows"
											? "Control"
											: "Command"}{" "}
										click to increase by 100.
										<br />
									</>
								) : null}
							</>
						}
					>
						<button
							type="button"
							aria-controls={uniqueId}
							disabled={numberValue >= Number(inputProps.max)}
							onClick={(event) => {
								const potentialNumber = Number(numberValue);
								if (!isNaN(Number(numberValue))) {
									let modifier = inputStep;
									if (allowShiftClick && event.shiftKey) {
										modifier = 10;
									}
									if (allowAltClick && event.altKey) {
										modifier = 0.1;
									}
									if (
										allowMetaOrCtrlClick &&
										(event.ctrlKey || event.metaKey)
									) {
										modifier = 100;
									}
									let newNumberValue = potentialNumber + 1 * modifier;
									if (
										inputProps.min &&
										newNumberValue < Number(inputProps.min)
									) {
										newNumberValue = Number(inputProps.min);
									}
									if (
										inputProps.max &&
										newNumberValue > Number(inputProps.max)
									) {
										newNumberValue = Number(inputProps.max);
									}
									setNumberValue(newNumberValue);
									if (input.current) {
										input.current.value = newNumberValue.toString();
									}
									if (onValidation) {
										clearTimeout(timeout);
										timeout = setTimeout(() => {
											onValidation(Number(newNumberValue));
										}, 100);
									}
								}
							}}
							className={`number-button ${numberValue >= Number(inputProps.max) ? "inactive" : "active"}`}
						>
							<Icon iconName={"plus"} aria-label={"Increase number"} />
						</button>
					</Tooltip>
					<Tooltip
						content={
							<>
								Click to decrease by {inputStep}.
								<br />
								{allowShiftClick ? (
									<>
										Shift click to decrease by 10.
										<br />
									</>
								) : null}
								{allowAltClick ? (
									<>
										Alt click to decrease by 0.1.
										<br />
									</>
								) : null}
								{allowMetaOrCtrlClick &&
								["Windows", "MacOS"].includes(getUserOperatingSystem()) ? (
									<>
										{getUserOperatingSystem() === "Windows"
											? "Control"
											: "Command"}{" "}
										click to decrease by 100.
										<br />
									</>
								) : null}
							</>
						}
						side="bottom"
					>
						<button
							type="button"
							aria-controls={uniqueId}
							disabled={numberValue <= Number(inputProps.min)}
							className={`number-button ${numberValue <= Number(inputProps.min) ? "inactive" : "active"}`}
							onClick={(event) => {
								const potentialNumber = Number(numberValue);
								if (!isNaN(Number(numberValue))) {
									let modifier = inputStep;
									if (allowShiftClick && event.shiftKey) {
										modifier = 10;
									}
									if (allowAltClick && event.altKey) {
										modifier = 0.1;
									}
									if (
										allowMetaOrCtrlClick &&
										(event.ctrlKey || event.metaKey)
									) {
										modifier = 100;
									}
									let newNumberValue = potentialNumber - 1 * modifier;
									if (
										inputProps.min &&
										newNumberValue < Number(inputProps.min)
									) {
										newNumberValue = Number(inputProps.min);
									}
									if (
										inputProps.max &&
										newNumberValue > Number(inputProps.max)
									) {
										newNumberValue = Number(inputProps.max);
									}
									setNumberValue(newNumberValue);
									if (input.current) {
										input.current.value = newNumberValue.toString();
									}
									if (onValidation) {
										clearTimeout(timeout);
										timeout = setTimeout(() => {
											onValidation(Number(newNumberValue));
										}, 100);
									}
								}
							}}
						>
							<Icon iconName={"minus"} aria-label={"Decrease number"} />
						</button>
					</Tooltip>
				</div>
			</div>
		</>
	);
});
