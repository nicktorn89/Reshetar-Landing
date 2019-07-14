import { ImageDecorator } from 'react-viewer/lib/ViewerProps';

export interface ImageViewerProps {
  status: boolean;
  onClose: () => void;
  images: ImageDecorator[];
  activeIndex: number;
}
