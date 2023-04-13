import MyInput from "../components/iu/MyInput/MyInput";

export default {
  title: 'Example/MyInput',
  component: MyInput,
};

export const SmallInput = {
  args: {
    big: false,
    placeholder: 'TEXT',
    label: 'asfasfasf'
  },
};

export const BigInput = {
  args: {
    big: true,
    placeholder: 'TEXT',
    label: 'asfasfasf'
  },
};
