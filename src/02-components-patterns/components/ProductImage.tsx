import { ProductContext } from "./ProductCard";
import { CSSProperties, useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={img || product.img || noImage}
      alt="Product"
    />
  );
};
