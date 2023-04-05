import Link from "next/link";
import styles from '../styles/A.module.css'

export default function A({children, href}) {
  return (
    <div className="">
      <Link className={styles.link} href={href}>
        {children}
      </Link>
    </div>
  )
}