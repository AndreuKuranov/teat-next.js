import Link from "next/link";
import MainContainer from "@components/MainContainer";
import { GetStaticProps } from 'next';
import { FC } from "react";
import { IUser } from "../types/types";
import UserList from "@components/UserList";
import axios from "axios";
import List from "@components/List";
import UserItem from "@components/UserItem";

export interface AProps {
  users: IUser[];
}

const Users: FC<AProps> = ({users}) => {
  return (
    <MainContainer description='users'>
      <h1>Список пользователей</h1>
      {/* <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        )}
      </ul> */}
      {/* <UserList users={users} /> */}
      <List 
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </MainContainer>
  )
}

export default Users;

export const getStaticProps: GetStaticProps = async () => {
  // const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  // const users: IUser = await response.json();

  const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users`)
  const users = response.data;


  return {
    props: {users},
  }
}