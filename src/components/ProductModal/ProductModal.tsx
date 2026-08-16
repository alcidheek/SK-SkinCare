import styles from "./ProductModal.module.css";
import type { Product } from "../../types/product";

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          ×
        </button>

        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />

        <div className={styles.details}>
          <h2>{product.name}</h2>

          <p>₦{product.price.toLocaleString()}</p>

          <p>Category: {product.category}</p>

          <p>{product.description}</p>

          <p>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;