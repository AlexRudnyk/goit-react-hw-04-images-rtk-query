import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

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
    <Formik
      initialValues={{ searchInput: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <ErrorMessage name="searchInput" />
        <Field
          type="text"
          name="searchInput"
          placeholder="Search images and photos"
          autoComplete="off"
          required
        />
        <button type="submit">Find</button>
      </Form>
    </Formik>
  );
};
