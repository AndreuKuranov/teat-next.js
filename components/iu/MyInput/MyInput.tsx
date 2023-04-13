import styles from '@components/iu/MyInput/MyInput.module.scss';
import cx from 'classnames';
import { FC } from 'react';

export interface MyInputProps {
  big?: boolean;
  placeholder: string;
  label: string;
  type?: 'text' | 'checkbox' | 'tel' | 'email' | 'password';
}

const MyInput: FC<MyInputProps> = ({ big, placeholder, label, type = 'text', ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} className={cx(styles['my-input'], big ? styles['big-input'] : '')} placeholder={placeholder} {...props} />
    </div>
  );
};

export default MyInput;