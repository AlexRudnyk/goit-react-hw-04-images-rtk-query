import { ImgItem } from 'components/imgItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List } from './ImgGallery.styled';
import { Spinner } from 'components/spinner';

export const ImgGallery = ({ images, error, isLoading }) => {
  return (
    <>
      {error && toast.error('Something went wrong...')}
      {isLoading ? (
        <Spinner />
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
