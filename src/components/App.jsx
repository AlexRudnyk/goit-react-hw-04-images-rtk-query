import { SearchBar } from './searchBar';
import { ImgGallery } from './imgGallery';
import { useState } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = query => {
    setSearchQuery(query);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImgGallery query={searchQuery} />
    </>
  );
};
