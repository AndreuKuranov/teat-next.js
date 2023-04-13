import cx from 'classnames';
import styles from "@components/MenuItem.module.scss";
import { LinkRoute } from "./LinkRoute";

const MenuItem = ({link, children}) => {
  return (
    <>
      <li className={cx(styles["item-menu"])}>
        <LinkRoute href={link}>
          {children}
        </LinkRoute>
      </li>
    </>
  )
}

export default MenuItem;