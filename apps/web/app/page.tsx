// import Image from "next/image";
// import { Card } from "@repo/ui/card";
// import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>🏠 Home 🏠</h1>
      <nav className={styles.nav}>
        <Link href="/hamster">Hamster</Link> | <Link href="/panda">Panda</Link>
      </nav>
      <Button appName="web" className={styles.button}>
        Click me!
      </Button>
    </main>
  );
}
