/**
 * The following JavaScript is loaded on the front end of the site when your block is present.
 */
export declare class Lightbox {
    lightbox: HTMLDialogElement;
    linkedInstances: Record<string, InstanceType<abstract new (...args: unknown[]) => unknown>>;
    constructor(lightbox: HTMLDialogElement);
    open(): void;
    close(): void;
}
//# sourceMappingURL=view.d.ts.map