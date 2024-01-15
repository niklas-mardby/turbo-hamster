import { Button } from "@repo/ui/button";
import styles from "../page.module.css";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>🐼 Panda 🐼</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link> | <Link href="/hamster">Hamster</Link>
      </nav>
      <Button appName="panda" className={styles.button}>
        Click me!?
      </Button>
    </main>
  );
}
