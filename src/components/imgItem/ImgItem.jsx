import { Item, Image } from './ImgItem.styled';

export const ImgItem = ({ webFormat, alt, largeImage }) => {
  return (
    <Item>
      <Image src={webFormat} alt={alt} loading="lazy" />
    </Item>
  );
};
