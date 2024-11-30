import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/home">Página Inicial</Link>
        </li>
        <li>
          <Link href="/about">Sobre Nós</Link>
        </li>
        <li>
          <Link href="/dashboard">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
