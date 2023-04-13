import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
  onClick?: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <li onClick={() => onClick(user)} style={{ padding: 15, border: '1px solid gray', listStyle: 'none', }}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
    </li>
  );
};

export default UserItem;