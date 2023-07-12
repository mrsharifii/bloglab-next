import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Bloglab. All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://facebook.com" target="_blank">
          <Image
            src="/fa.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="facebook"
          />
        </Link>
        <Link href="https://youtube.com" target="_blank">
          <Image
            src="/yt.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="youtube"
          />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <Image
            src="/in.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="instagram"
          />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <Image
            src="/tw.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="twitter"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
