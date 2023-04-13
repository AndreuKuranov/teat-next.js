import MyButton from "@components/iu/MyButton/MyButton";
import counter from "@store/counter";
import { observer } from "mobx-react-lite";
import styles from "@components/Count.module.scss";

const Count = observer (() => {
  return (
    <div className={styles['counter']}>
      <div className={styles['counter__num']}>
        {counter.total}
      </div>
      <div className={styles['counter__buttons']}>
        <MyButton onClick={() => counter.increment()}>
          +
        </MyButton>
        <MyButton onClick={() => counter.decrement()}>
          -
        </MyButton>
      </div>
    </div>
  )
})

export default Count;