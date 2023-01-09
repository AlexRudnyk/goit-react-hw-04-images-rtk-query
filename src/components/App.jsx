import { SearchBar } from './searchBar';
import { ImgGallery } from './imgGallery';
import { useState } from 'react';
import { Container, MoreBtn } from './App.styled';
import { useFetchImgsBySearchQuery } from 'redux/imgSlice';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);

  const {
    data: images,
    error,
    isLoading,
  } = useFetchImgsBySearchQuery({ searchQuery, searchPage });

  const totalPages = Math.ceil(images?.total / 20);

  const handleSubmit = query => {
    setSearchQuery(query);
    setSearchPage(1);
  };

  const handleLoadMoreClick = () => {
    setSearchPage(state => state + 1);
  };

  console.log('QUERY: ', searchQuery);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImgGallery images={images} error={error} isLoading={isLoading} />
      {searchPage < totalPages && (
        <Container>
          <MoreBtn type="button" onClick={handleLoadMoreClick}>
            Load more
          </MoreBtn>
        </Container>
      )}
    </>
  );
};
