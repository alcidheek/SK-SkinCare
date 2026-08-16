import styles from "./ProductCard.module.css";

type ProductCardProps = {
  name: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
  onClick: () => void;
};

function ProductCard({
  name,
  image,
  onClick,
}: ProductCardProps) {
  return (
    <article className={styles.card} onClick={onClick}>
      <img
        className={styles.image}
        src={image}
        alt={name}
      />

      <h2 className={styles.productName}>{name}</h2>
    </article>
  );
}

export default ProductCard;