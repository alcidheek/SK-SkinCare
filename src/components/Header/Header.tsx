import styles from "./Header.module.css";
import { Home as HomeIcon } from "lucide-react";


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        SK Products
      </div>

      <nav className={styles.nav}>
        <a href="#home">
          <HomeIcon size={18} />
         <span>Home</span>
        </a>
  <a href="#products">Products</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;