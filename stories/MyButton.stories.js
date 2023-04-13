import MyButton from "../components/iu/MyButton/MyButton";

export default {
  title: 'Example/MyButton',
  component: MyButton,
};

export const RedBtn = {
  args: {
    color: 'red',
    children: 'test'
  },
};

export const OrangeBtn = {
  args: {
    color: 'orange',
    children: 'test'
  },
};

export const BigBtn = {
  args: {
    color: 'orange',
    big: true,
    children: 'test'
  },
};