const ImageGalleryItem = ({ src, srcLarge, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img
        src={src}
        data-source={srcLarge}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;