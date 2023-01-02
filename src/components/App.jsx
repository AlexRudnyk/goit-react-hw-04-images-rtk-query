import { SearchBar } from './searchBar';
import { ImgGallery } from './imgGallery';
import { useState } from 'react';
import { Container, MoreBtn } from './App.styled';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);

  const handleSubmit = query => {
    setSearchQuery(query);
    setSearchPage(1);
  };

  const handleLoadMoreClick = () => {
    setSearchPage(state => state + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImgGallery query={searchQuery} page={searchPage} />
      <Container>
        <MoreBtn type="button" onClick={handleLoadMoreClick}>
          Load more
        </MoreBtn>
      </Container>
    </>
  );
};
