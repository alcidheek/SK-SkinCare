import type { Product } from "../types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Nivea Cream",
    price: 6500,
    category: "Skincare",
    image: "/nivea.png",
    description: "A moisturizing cream for everyday skin care.",
    inStock: true,
  },
  {
    id: 2,
    name: "CeraVe Moisturizer",
    price: 8500,
    category: "Skincare",
    image: "/CeraVe.png",
    description: "A gentle moisturizer suitable for daily use.",
    inStock: true,
  },
  {
    id: 3,
    name: "Vaseline Lotion",
    price: 5000,
    category: "Body Care",
    image: "/Vaseline.png",
    description: "Helps keep the skin smooth and moisturized.",
    inStock: true,
  },
  {
    id: 4,
    name: "Dove Beauty Bar",
    price: 6500,
    category: "Body Care",
    image: "/Dove Beauty Bar.png",
    description: "Helps clear rak spot on skin.",
    inStock: true,
  },
   {
    id: 5,
    name: "Lip balm",
    price: 6500,
    category: "Lip Care",
    image: "/LipBalm.png",
    description: "mositurizes and keep your lips pink.",
    inStock: true,
  },


];

export default products;