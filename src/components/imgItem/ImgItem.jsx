import { Modal } from 'components/modal';
import { useState } from 'react';
import { Item, Image } from './ImgItem.styled';

export const ImgItem = ({ webFormat, alt, largeImage }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Item onClick={toggleModal}>
        <Image src={webFormat} alt={alt} loading="lazy" />
      </Item>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Image src={largeImage} alt={alt} loading="lazy" />
        </Modal>
      )}
    </>
  );
};
