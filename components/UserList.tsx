import { IUser } from '../types/types';
import React, { FC } from 'react';
import UserItem from './UserItem';

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
  return (
    <ul style={{ padding: 0 }}>
      {users.map(user => (
        <UserItem key={user.id}  user={user} />
      ))}
    </ul>
  );
};

export default UserList;