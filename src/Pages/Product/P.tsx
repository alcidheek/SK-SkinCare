import Header from "../../components/Header/Header";
import styles from "./P.module.css";
import products from "../../data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
import ProductModal from "../../components/ProductModal/ProductModal";
import type { Product } from "../../types/product";
import { Search } from "lucide-react";

function Products() {
const [selectedProduct, setSelectedProduct] =
  useState<Product | null>(null);

const [searchTerm, setSearchTerm] = useState("");

const [selectedCategory, setSelectedCategory] = useState("All");


const filteredProducts = products.filter((product) =>{
  const matchesSearch =   product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.category.toLowerCase().includes(searchTerm.toLowerCase())

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
}

);

  return (
    <>
      <Header />

      <main className={styles.productsPage}>
        <section className={styles.intro}>
          <h1>Our Products</h1>

          <p>
            Discover our collection of quality beauty and skincare products.
          </p>
        </section>

           <div className={styles.search}>
            <Search size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
           onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className={styles.categories}>
        <button onClick={() => setSelectedCategory("All")}>
         All
        </button>

        <button onClick={() => setSelectedCategory("Skincare")}>
         Skincare
        </button>

       <button onClick={() => setSelectedCategory("Body Care")}>
        Body Care
       </button>

        <button onClick={() => setSelectedCategory("Hair Care")}>
        Hair Care
       </button>

        <button onClick={() => setSelectedCategory("Lip Care")}>
        Lip Care
        </button>
        </div>

        
        {filteredProducts.length > 0 ? (
        <section className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
              inStock={product.inStock}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </section>
        ) : (
            <p className={styles.noResults}>
    No products found. Try searching for something else.
  </p>
        )}

                {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </main>
    </>
  );
}

export default Products;