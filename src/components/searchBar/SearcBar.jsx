import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  searchInput: yup.string().min(2, 'Too short').max(50, 'Too long'),
});

export const SearchBar = () => {
  const handleSubmit = ({ formData }, { resetForm }) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={{ searchInput: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form onSubmit={handleSubmit}>
        <ErrorMessage name="searchInput" />
        <Field
          type="text"
          name="searchInput"
          placeholder="Search images and photos"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
