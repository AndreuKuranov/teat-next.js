import A from "./A";
import Head from "next/head";

const MainContainer = ({children, description}) => {

  return (
    <>
      <Head>
        <meta name="description" content={`next.js ${description}`}/>
        <title>next.js</title>
      </Head>
      <div className="navbar">
        <A href='/'>Главная</A>
        <A href='/users'>Пользователи</A>
      </div>
      <style jsx>
        {`
          .navbar {
            background-color: orange;
            padding: 15px;
            display: flex;
            gap: 20px;
          }
        `}
      </style>
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer;