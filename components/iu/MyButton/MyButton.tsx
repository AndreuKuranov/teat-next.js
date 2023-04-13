import styles from '@components/iu/MyButton/MyButton.module.scss';
import cx from 'classnames';
import { FC } from 'react';

export interface MyButtonProps {
  children: React.ReactNode;
  color?: string;
  big?: boolean;
  onClick?: () => void,
}

const MyButton: FC<MyButtonProps> = ({
  children,
  color,
  big,
  onClick,
  ...props
}) => {

  return (
    <button {...props} onClick={onClick} className={cx(styles['my-button'], big ? styles['big-btn'] : '')} style={{ color }}>
      {children}
    </button>
  );
};

export default MyButton;