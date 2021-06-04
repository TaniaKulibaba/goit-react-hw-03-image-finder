import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ items, onClick, children }) => {
  return (
    <>
      <ul className="ImageGallery">
        {items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            onClick={onClick}
            key={id}
            src={webformatURL}
            srcLarge={largeImageURL}
          />
        ))}
      </ul>
      {children}
    </>
  );
};
export default ImageGallery;