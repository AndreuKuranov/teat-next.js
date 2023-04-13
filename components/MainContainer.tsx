import Head from "next/head";
import { useState } from "react";
import Navbar from "@components/Navbar";
import styles from "@components/MainContainer.module.scss";

export interface MyButtonProps {
  children: React.ReactNode;
  description: string;
}

const MainContainer = ({children, description}) => {
  const [ menu, setMenu ] = useState([
    {link: '/', name: 'Главная'},
    {link: '/users', name: 'Пользователи'},
  ])

  return (
    <>
      <Head>
        <meta name="description" content={`next.js ${description}`}/>
        <title>next.js</title>
      </Head>
      <Navbar />
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default MainContainer;