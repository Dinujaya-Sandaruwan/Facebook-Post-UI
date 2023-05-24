import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const MyImageGallery: React.FC = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1020/1000/600/',
            thumbnail: 'https://picsum.photos/id/1020/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1021/1000/600/',
            thumbnail: 'https://picsum.photos/id/1021/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1022/1000/600/',
            thumbnail: 'https://picsum.photos/id/1022/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1023/1000/600/',
            thumbnail: 'https://picsum.photos/id/1023/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1024/1000/600/',
            thumbnail: 'https://picsum.photos/id/1024/250/150/',
        },
    ];

    return (
        <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            slideInterval={2000}
            slideOnThumbnailOver={true}
            showIndex={true}
            thumbnailPosition="bottom"
        />
    );
};

export default MyImageGallery;
