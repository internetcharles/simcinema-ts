import React from "react";

interface Props {
  name: string;
  price: number;
  image: string;
}

const PortraitButton: React.FC<Props> = ({ name, price, image }) => {
  return (
    <>
      <div>{image}</div>
      <div>{name}</div>
      <div>{price}</div>
    </>
  );
};

export default PortraitButton;
