import AppNav from "../AppNav/AppNav";
import Logo from "../Logo/Logo";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Logo />
      <AppNav />
    </header>
  );
}
