class CustomInputEvent extends Event {
	minValue;
	maxValue;

	constructor(
		type: "slider-input" | "slider-change",
		values: { minValue: number; maxValue: number },
	) {
		super(type);
		this.minValue = values.minValue;
		this.maxValue = values.maxValue;
	}
}

function getTrackPosition(slider: HTMLInputElement) {
	return (
		((Number(slider.value) - Number(slider.min)) /
			(Number(slider.max) - Number(slider.min))) *
		100
	);
}

const twoHandleRangeSliders = document.querySelectorAll<HTMLFieldSetElement>(
	"fieldset.two-handle-range-slider",
);
for (const twoHandleRangeSlider of twoHandleRangeSliders) {
	const slider1 = twoHandleRangeSlider.querySelector<HTMLInputElement>(
		"input[type=range].slider-1",
	);
	const slider2 = twoHandleRangeSlider.querySelector<HTMLInputElement>(
		"input[type=range].slider-2",
	);
	const legend = twoHandleRangeSlider.querySelector<HTMLLegendElement>(
		"legend.two-handle-range-slider-legend",
	);
	const ariaOutput =
		twoHandleRangeSlider.querySelector<HTMLDivElement>(".aria-output");
	if (!slider1 || !slider2 || !legend || !ariaOutput) {
		throw new Error("Failed to load slider.");
	}
	twoHandleRangeSlider.style.setProperty(
		"--track-handle-1-position",
		`${getTrackPosition(slider1).toString()}%`,
	);
	twoHandleRangeSlider.style.setProperty(
		"--track-handle-2-position",
		`${getTrackPosition(slider2).toString()}%`,
	);
	slider1.addEventListener("input", () => {
		const minValue = Math.min(Number(slider1.value), Number(slider2.value));
		const maxValue = Math.max(Number(slider1.value), Number(slider2.value));
		twoHandleRangeSlider.style.setProperty(
			"--track-handle-1-position",
			`${getTrackPosition(slider1).toString()}%`,
		);
		twoHandleRangeSlider.dispatchEvent(
			new CustomInputEvent("slider-input", { minValue, maxValue }),
		);
	});
	slider2.addEventListener("input", () => {
		const minValue = Math.min(Number(slider1.value), Number(slider2.value));
		const maxValue = Math.max(Number(slider1.value), Number(slider2.value));
		twoHandleRangeSlider.style.setProperty(
			"--track-handle-2-position",
			`${getTrackPosition(slider2).toString()}%`,
		);
		twoHandleRangeSlider.dispatchEvent(
			new CustomInputEvent("slider-input", { minValue, maxValue }),
		);
	});
	slider1.addEventListener("change", () => {
		const minValue = Math.min(Number(slider1.value), Number(slider2.value));
		const maxValue = Math.max(Number(slider1.value), Number(slider2.value));

		twoHandleRangeSlider.dispatchEvent(
			new CustomInputEvent("slider-change", { minValue, maxValue }),
		);
	});
	slider2.addEventListener("change", () => {
		const minValue = Math.min(Number(slider1.value), Number(slider2.value));
		const maxValue = Math.max(Number(slider1.value), Number(slider2.value));

		twoHandleRangeSlider.dispatchEvent(
			new CustomInputEvent("slider-change", { minValue, maxValue }),
		);
	});
	twoHandleRangeSlider.addEventListener("slider-change", ((
		event: CustomInputEvent,
	) => {
		const sliders = Array.from(twoHandleRangeSlider.children);
		ariaOutput.innerHTML = `${document.activeElement === slider1 ? slider1.value : slider2.value}. ${legend.innerHTML} between ${event.minValue.toString()} and ${event.maxValue.toString()}`;
		if (
			(sliders.indexOf(slider1) < sliders.indexOf(slider2) &&
				(Number(slider1.value) > event.minValue ||
					Number(slider1.value) === Number(slider2.value))) ||
			(sliders.indexOf(slider1) > sliders.indexOf(slider2) &&
				Number(slider1.value) < event.maxValue) ||
			Number(slider1.value) === Number(slider2.value)
		) {
			// Move handle two so it's correct in the tab order
			if (
				sliders.indexOf(slider1) < sliders.indexOf(slider2) &&
				(Number(slider1.value) > event.minValue ||
					Number(slider1.value) === Number(slider2.value))
			) {
				if (document.activeElement === slider1) {
					slider1.insertAdjacentElement("beforebegin", slider2);
				} else {
					slider2.insertAdjacentElement("afterend", slider1);
				}
			} else {
				if (document.activeElement === slider1) {
					slider1.insertAdjacentElement("afterend", slider2);
				} else {
					slider2.insertAdjacentElement("beforebegin", slider1);
				}
			}
			// swap aria labels for handles 1 and 2
			const slider1AriaLabel = slider1.ariaLabel;
			slider1.ariaLabel = slider2.ariaLabel;
			slider2.ariaLabel = slider1AriaLabel;
		}
	}) as EventListener);
}
