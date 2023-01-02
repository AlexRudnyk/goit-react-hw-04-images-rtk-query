import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { SearchForm, Input, SearchBtn, Header } from './SearchBar.styled';
import { ImSearch } from 'react-icons/im';

const schema = yup.object().shape({
  searchInput: yup.string().min(2, 'Too short').max(50, 'Too long'),
});

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ searchInput }, { resetForm }) => {
    if (searchInput === '') return;
    onSubmit(searchInput);
    resetForm();
  };

  return (
    <Header>
      <Formik
        initialValues={{ searchInput: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <SearchForm>
          <ErrorMessage name="searchInput" />
          <Input
            type="text"
            name="searchInput"
            placeholder="Search images and photos"
            autoComplete="off"
            required
          />
          <SearchBtn type="submit">
            <ImSearch size={20} />
          </SearchBtn>
        </SearchForm>
      </Formik>
    </Header>
  );
};
