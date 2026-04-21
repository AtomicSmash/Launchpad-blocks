export declare const example: {
    attributes: {
        images: {
            id: number;
            url: string;
        }[];
    };
    innerBlocks: ({
        name: string;
        innerBlocks: {
            name: string;
            attributes: {
                id: number;
                url: string;
            };
        }[];
    } | {
        name: string;
        innerBlocks: {
            name: string;
            attributes: {
                images: {
                    id: number;
                    url: string;
                }[];
            };
            innerBlocks: ({
                name: string;
                attributes: {
                    shouldPullImagesFromContext: boolean;
                    shouldShowTextVisually?: undefined;
                    className?: undefined;
                };
            } | {
                name: string;
                attributes: {
                    shouldShowTextVisually: boolean;
                    className: string;
                    shouldPullImagesFromContext?: undefined;
                };
            })[];
        }[];
    })[];
};
//# sourceMappingURL=example.d.ts.map