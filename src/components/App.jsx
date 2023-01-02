import { SearchBar } from './searchBar';
import { ImgGallery } from './imgGallery';
import { useState } from 'react';

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
      <button type="button" onClick={handleLoadMoreClick}>
        Load more
      </button>
    </>
  );
};
