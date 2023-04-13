import cx from 'classnames';
import styles from "@components/Menu.module.scss";
import MenuItem from './MenuItem';
import { MenuType } from "../types/types";
import { FC } from 'react';

export interface MenuProps {
  listMenu: MenuType[];
}

const Menu: FC<MenuProps> = ({listMenu}) => {
  return (
    <>
      <ul className={cx(styles.menu)}>
        {listMenu.map(item => 
          <MenuItem key={item.id} link={item.link}>
            {item.name}
          </MenuItem>
        )}
      </ul>
    </>
  )
}

export default Menu;