import { useState } from "react";
import cx from 'classnames';
import styles from "@components/Navbar.module.scss";
import Menu from "./Menu";
import { MenuType } from "../types/types";

const Navbar = () => {
  const [ menu, setMenu ] = useState<MenuType[]>([
    { id: 1, link: '/', name: 'Главная'},
    { id: 2, link: '/users', name: 'Пользователи'},
    { id: 3, link: '/cardPage', name: 'Карточка'},
    { id: 4, link: '/eventsExample', name: 'event'},
  ])

  return (
    <>
      <nav className={cx(styles.navbar, 'container')}>
        <Menu listMenu={menu}/>
      </nav>
    </>
  )
}

export default Navbar;