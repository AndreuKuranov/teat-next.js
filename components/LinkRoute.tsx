import Link from "next/link";
import styles from '@components/LinkRoute.module.scss';
import cx from 'classnames';

export interface AProps {
  children: React.ReactNode;
  href: string;
}

export const LinkRoute = ({children, href}) => {
  return (
    <>
      <Link className={cx(styles.link)} href={href}>
        {children}
      </Link>
    </>
  )
}