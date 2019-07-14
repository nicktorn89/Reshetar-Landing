import { ImageDecorator } from 'react-viewer/lib/ViewerProps';

export const createSliderItem = (images: string[]): ImageDecorator[] => images.map((image) => { return { src: image }; });

export const emptyFunc = (): void => {};
