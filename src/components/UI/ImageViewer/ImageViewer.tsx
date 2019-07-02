import React, { memo } from 'react';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';
import { ImageViewerProps } from './types';

const ImageViewer: React.FC<ImageViewerProps> = ({ status, onClose, images = [], activeIndex }) => 
  typeof document !== 'undefined' ?
    <Viewer
      visible={status}
      images={images}
      activeIndex={activeIndex}
      drag={true}
      rotatable={false}
      attribute={false}
      scalable={false}
      noNavbar={true}
      onClose={onClose}
    />
    : <React.Fragment />;

export default memo(ImageViewer);
