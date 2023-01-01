import { ImgItem } from 'components/imgItem';
import { useFetchImgsBySearchQuery } from 'redux/imgSlice';
import { List } from './ImgGallery.styled';

export const ImgGallery = ({ query }) => {
  const { data: images, error, isLoading } = useFetchImgsBySearchQuery(query);
  return (
    <>
      {error && <p>Something went wrong</p>}
      {isLoading ? (
        <b>Downloading images</b>
      ) : (
        <List>
          {images.hits.map(image => (
            <ImgItem
              key={image.id}
              webFormat={image.webformatURL}
              alt={image.tags}
              largeImage={image.largeImageURL}
            />
          ))}
        </List>
      )}
    </>
  );
};
